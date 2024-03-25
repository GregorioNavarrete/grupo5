/*Es para gestionar todo el manejo de mis productos, para no tener
toda la logica en el "productController" y no ser muy grande
*/

const db = require('../model/database/models')
const fs = require('fs');
const path = require('path');
//const upload = require('../middlewares/multer');





/*****Es para pasar el JASON a un arreglo de objetos y poder manipularlo ******/
const productsFilePath = path.join(__dirname, '../data/products.json');



const productService = {

    //es un atributo que tiene todos los productos en un Arrglo de objetos
    products:JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')), //simplemente puedo usar el GetAll()para consultar a la BDs
    

    /* getAll: function(){
        return this.products;    
    }, */
    getAll: async function (){
        try {
            let products = await db.Product.findAll({
                include: [
                    { association: "Languages" },
                    { association: "Editorials" },
                    { association: "Collections" },
                    { association: "authors" },
                    { association: "Genres" },
                    { association: "Supports" }
                ]
            });
           //console.log(products);
            return products;
            
        } catch (error) {
            //para q al menos no se rompa la vista
            //mandar un mensaje de error
            return [];
        }    
    },
    GetLimit: async function (){
        try {
            let products = await db.Product.findAll({
               
                limit : 3 
            });



            
           //console.log(products);
            return products;
            
        } catch (error) {
            //para q al menos no se rompa la vista
            //mandar un mensaje de error
            return [];
        }    
    },
    

    save : async function(req){
        try {
            if (req.file !== undefined) {
                //le paso todo el req al back
                let product = req.body;
                let imagen = req.file;
                product.portada = imagen.filename;//no me reconose el filename
    
                console.log(req.body);
                /*****/
                let nuevaLibro = await db.Product.create({
                    ID_SUPPORT: req.body.formato,
                    ID_EDITORIAL: req.body.edition,
                    ID_LANGUAGE: req.body.idioma,
                    ID_COLLECTION: req.body.sagaSerie,
                    title: req.body.title  ,
                    subtitle: req.body.subtitle,
                    price:  req.body.precio,
                    image:  imagen.filename,
                    description:  req.body.descripcion,
                    pages:  req.body.paginas,
                    edition:  req.body.edition,
                    stock: req.body.Stock,
                    created:1,
                    updated:1 ,
                    discount: req.body.Descuento
                    //created:
                    //updated:
                    
                });
         
                try {
                    //Productos_Autores es el alias !!!!
                    let nuevaRelacion = await db.Productos_Autores.create({
                        id_author: parseInt(req.body.Autor),
                        id_product: nuevaLibro.id_product  
                    });
                    
                  } catch (error) {
                    console.error('Error al crear la relación ProductoAutor:', error);
                  }
                  try {
                    //Productos_Autores es el alias !!!!
                    let tabla = await db.Productos_Generos.create({
                        ID_GENRE: parseInt(req.body.genero),
                        ID_PRODUCT: nuevaLibro.id_product  
                    });
                    
                  } catch (error) {
                    console.error('Error al crear la relación Productos_Generos:', error);
                  }
               
                // //como los autores ya estan predefinidos, solo creo el registro en "la tabla intermedia product-author"
                // let nuevaRelacion = await db.ProductoAutor.create({
                //     id_author: parseInt(req.body.Autor),
                //     id_product: parseInt(nuevaLibro.id_product)  
                    
                // });
                

                return nuevaLibro;
                /*****/
                // //ME BUSCA EL OBJ, CON EL id MAS GRANDE
                // let mayorID = this.products.reduce((maxID, Obj) => {
                //     if (Obj.id > maxID.id) {
                //         return Obj;
                //     } else {
                //         return maxID;
                //     }
                //     });
                // product.id = mayorID.id+1;
                // //Lo agrego al nuevo producto al arreglo de OBJ de productos
                // this.products.push(product);
                // //re escribimos el JSON anterio por el nuevo con mi nuevo producto
                // fs.writeFileSync(productsFilePath,JSON.stringify(this.products),'utf-8');
            } else {          
                //***************************igual el fomulario no deja ingresa sin imagen 
                
                // let product = req.body;
                // //como no se puede poner null, los deja sin campo image
                // //let imagen = "null";  con string traba el html 
                // product.portada = 0;
    
                // //ME BUSCA EL OBJ, CON EL id MAS GRANDE
                // let mayorID = this.products.reduce((maxID, Obj) => {
                //     if (Obj.id > maxID.id) {
                //         return Obj;
                //     } else {
                //         return maxID;
                //     }
                //     });
                // product.id = mayorID.id+1;
                // this.products.push(product);
                // fs.writeFileSync(productsFilePath,JSON.stringify(this.products),'utf-8');
            }
        }catch(e){
            console.log(e)
        }
       
    },

    getOne: async function (id){
        try {
            let products = await db.Product.findAll({
                include: [
                    { association: "Languages" },
                    { association: "Editorials" },
                    { association: "Collections" },
                    { association: "authors" },
                    { association: "Genres" },
                    { association: "Supports" },
                    { association: "Comments" },
                    
                ]
            });
           //console.log(products.Supports);
           product = products.find((elem)=>elem.id_product == id);

           if(!product){
                // si el no se encuantra el "id" en el arreglo, lo entrgamos bacio al obj
                console.log("id invalido");
                product = {};
           }
            return product;
            
        } catch (error) {
            //para q al menos no se rompa la vista
            //mandar un mensaje de error
            console.log(error);
            return [];
        }    
    },

    delete: async function(id){
        try{
            // indice = this.products.findIndex((elem)=>elem.id == id);
            // this.products.splice(indice,1);
            // fs.writeFileSync(productsFilePath,JSON.stringify(this.products),'utf-8');
            /////////
            let deletProductos_Autores = await db.Productos_Autores.destroy(
                {
                      //indicamos a que registro aplicamos los cambios 
                      // todos con el mismo "id_product" seran modificados
                      where: {id_product : parseInt(id) }
                  }
              );
              let deletProductos_Generos = await db.Productos_Generos.destroy(
             {
                      //indicamos a que registro aplicamos los cambios 
                      // todos con el mismo "id_product" seran modificados
                      where: {id_product : parseInt(id) }
                  }
              );

              let deletComment = await db.Comment.destroy(
                {
                         //indicamos a que registro aplicamos los cambios 
                         // todos con el mismo "id_product" seran modificados
                         where: {ID_PRODUCT : parseInt(id) }
                     }
                 );
//tambien se relaciona con la tabla "comment" 

    let deletproduct_carrito = await db.user_product.destroy(
    {
             //indicamos a que registro aplicamos los cambios 
             // todos con el mismo "id_product" seran modificados
             where: {ID_PRODUCT : parseInt(id) }
         }
     );
//tambien se relaciona con la tabla "product_carrito"

let deletproduct_favorites = await db.product_favorites.destroy(
    {
             //indicamos a que registro aplicamos los cambios 
             // todos con el mismo "id_product" seran modificados
             where: {ID_PRODUCT : parseInt(id) }
         }
     );

//tambien se relaciona con la tabla "product_favorites"     


              //hay que borrar antes todas las relaciones del libro, antres de borrarlo 
            let delet = await db.Product.destroy(
                {
                    //indicamos a que registro aplicamos los cambios 
                    where: {id_product : parseInt(id) }
                }
            );

            /////////
        }catch(e){
            console.log(e);
        }

    },
    edit: async function(req){
        try{
            console.log(req.body);


            let producto = await this.getOne(req.params.id);
            //let nuevoProducto = req.body; // es porque el PUT viaja de forma privada
            let imagen = req.file;  //esto lo copie del Crear libro, para la imagen
    
            console.log("\n  antes : " + producto.image);
            let borrar = path.join(__dirname, `../../public/img/portadas/${producto.image}`);
            fs.unlink(borrar, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("\n  medio : " + producto.image);
            });
    
            // producto.titulo = nuevoProducto.titulo;
            // producto.precio = nuevoProducto.precio;
            // producto.genero = nuevoProducto.genero ;
            // producto.autor = nuevoProducto.autor;
            // producto.Estrellas = nuevoProducto.Estrellas;
            // producto.descripcion = nuevoProducto.descripcion;

            /********************/
            let edicion = await db.Product.update(
                {
                    //los campos de la tabla que buscamos modificar
                    title : req.body.titulo,

                    ID_SUPPORT: req.body.formato,
                    ID_EDITORIAL: req.body.edition,
                    ID_LANGUAGE: req.body.idioma,
                    ID_COLLECTION: req.body.sagaSerie,
                    subtitle: req.body.subtitulo,
                    price:  req.body.precio,
                    image:  req.file.filename,
                    description:  req.body.descripcion,
                    pages:  req.body.paginas,
                    edition:  req.body.edition,
                    stock: req.body.Stock,
                    created:1,
                    updated:1 ,
                    discount: req.body.Descuento
                    //created:
                    //updated:
                },{
                    //indicamos a que registro aplicamos los cambios 
                    where: {id_product : req.params.id }
                }
            );
            let edicionProductos_Autores = await db.Productos_Autores.update(
                {
                    //los campos de la tabla que buscamos modificar
                    id_author: parseInt(req.body.Autor)
                },{
                    //indicamos a que registro aplicamos los cambios 
                    // todos con el mismo "id_product" seran modificados
                    where: {id_product : req.params.id }
                }
            );
            let edicionProductos_Generos = await db.Productos_Generos.update(
                {
                    //los campos de la tabla que buscamos modificar
                    ID_GENRE: parseInt(req.body.genero)
                    
                },{
                    //indicamos a que registro aplicamos los cambios 
                    // todos con el mismo "id_product" seran modificados
                    where: {id_product : req.params.id }
                }
            )
            /********************/



            if (req.file != undefined) {
                //no puedo esditar imagenes, xq el filename sale indefinido siempre !!!!
                producto.image = imagen.filename;
            }else{
                producto.image = 0;
            }
    
            console.log("\n  despues : " + imagen.filename);
            
    
            // let indece = this.products.findIndex(elem => elem.id == req.params.id);
            // this.products[indece]= producto;
        
            // fs.writeFileSync(productsFilePath,JSON.stringify(this.products),'utf-8');
        }catch(e){
            console.log(e);
        }


    },

    search: async  function(req){
        try {
            let allUsers = await this.getAll();
            let searchUsers = req.query.search.toLowerCase();
            let results = [];

            for ( let i=0; i < allUsers.length;i++){
               if(allUsers[i].title.toLowerCase().includes(searchUsers) ){
                results.push(allUsers[i])
              }
            }
            return results
        } catch (error) {
            console.log(error);
        }
        
      },

    filter : async  (req, res) => {
            try{
                let products = await db.Product.findAll({
                    include: [
                        { association: "Languages" },
                        { association: "Editorials" },
                        { association: "Collections" },
                        { association: "authors" },
                        { association: "Genres" },
                        { association: "Supports" }
                    ]
                });
                let generos = req.query.genero;
                let autores = req.query.autor;
                let formato = req.query.formato;
                let editorial = req.query.editoriales; 

                let filtrados=[];
               //console.log(products);
            
                for(let i=0; i < products.length;i++ ){
                    //Genres y authors son arreglos, hay que recorrerlos y luego ir a la condicion
                    if(products[i].Genres[0].name == generos   || products[i].authors[0].name == autores || products[i].formato == formato || products[i].editorial == editorial ){
                            filtrados.push(products[i]);
                            
                    }
                
                }
                
                return filtrados
            }catch(error){
                console.log(error);
                return [];
            }
        },
        
        catg: async function (req){
            try {
                let catg = Object.keys(req.query)[0];
                let products = await db.Product.findAll({
                    include: [{
                        association: 'Genres',
                        where: { name: catg } // Filter by the specified category
                    },{ association: "authors" }]
                });

               
                return products;

            
            } catch (error) {
                //para q al menos no se rompa la vista
                //mandar un mensaje de error
                console.log(error);
                return [];
            }  
        },
        fiandBest: async function (){
            try {
                let products = await db.Product.findAll({
                    include: [{
                        association: 'Genres',
                        where: { name: "Best Seller" } 
                    },{ association: "authors" }]
                });
                return products;
            } catch (error) {
                console.log(error);
                return [];
            }  
        },


        fiandGenres: async function (){
            try {
                let generos = await db.Genre.findAll({
                    include: [
                        { association: "products" },        
                    ]
                });
                return generos;
            } catch (error) {
                console.log(error);
                return [];
            }  
        },

        fiandEditorials: async function (){
            try {
                let editoriales = await db.Editorial.findAll({
                });
                return editoriales;
            } catch (error) {
                console.log(error);
                return [];
            }  
        },

        fiandAuthors: async function (){
            try {
                let autores = await db.Author.findAll({
                });
                return autores;
            } catch (error) {
                console.log(error);
                return [];
            }  
        },
        
        fiandCollections: async function (){
            try {
                let colecciones = await db.Collection.findAll({
                });
                return colecciones;
            } catch (error) {
                console.log(error);
                return [];
            }  
        },






        findGenre: async function (id){
            //no lo llama nadie 
            try {
                let product_genre = await db.Product.findAll();
               
               product = products.find((elem)=>elem.id_product == id);
    
               if(!product){
                    // si el no se encuantra el "id" en el arreglo, lo entrgamos vacio al obj
                    console.log("id invalido");
                    product = {};
               }
                return product;
                
            } catch (error) {
                //para q al menos no se rompa la vista
                //mandar un mensaje de error
                
                return [];
            }    
        },

        authors: async (id) => {
            try {
             return await db.Author.findByPk(id,{
                include : [{association : 'Products'}]
            })
            
            } catch (error) {
                
            }      
        },


        getCarrito: async function(id){
            try{
                let products = await db.user_product.findAll({
                    
                        include : [{association : 'products'
                    ,include : [{association : 'authors'}]}] 
                    ,
                        //hay que poner, o traera todo el array
                        where : {ID_USER: id}
                }

                  );
        
                // Puedes retornar directamente el array de productos encontrados
                // console.log(products[0].dataValues);
                // console.log(products[1].dataValues);
                //console.log(products[2].dataValues);
                let Total = 0;
                let precios = []; 
                for(let i=0; i < products.length; i++){
                    //let suma = 0;
                    precios[i] = products[i].dataValues.cant * products[i].dataValues.products.price; 
                    Total = Total + products[i].dataValues.cant * products[i].dataValues.products.price;
                }

                //console.log(precios);
                let envio = 10000;
                let obj={
                    prod: products,
                    prec :precios,
                    Tot : Total,
                    TotEnvio: Total+10000
                }
                return obj;
            }catch(e){
                console.log(e);
            }
        },
        getOneProducto : async (id) => {
            try {
             let aux = await db.user_product.findAll({ 
                where : {ID: id}
             });
            //  console.log("estas en getOneProducto");
            //  console.log(aux[0].dataValues.cant);
             return aux;
            } catch (error) {
                console.log(error);
            }      
        },
        editCantidad: async function(req){
            try{
                let producto = await this.getOneProducto(req.params.tabla);
                // console.log("estas en editCantidad");
                // console.log(producto);
                // console.log(req.params);
                // console.log(producto[0].dataValues.cant);
                if(req.params.cant === '1'){
                    //tengo q incrementar 1
                    let aux = parseInt(producto[0].dataValues.cant) + 1 ;
                    //console.log(aux);
                    // el tope superiro no tendria que pasar el stock disponible
                    let edicion = await db.user_product.update(
                        {
                            //los campos de la tabla que buscamos modificar
                            cant : aux
                        },{
                            //indicamos a que registro aplicamos los cambios 
                            where: {ID : req.params.tabla }
                        }) 
                }
                if(req.params.cant === '0'){
                    //tengo q decrementar 1
                    if(producto[0].dataValues.cant > 1 ){
                        
                        let aux =  parseInt(producto[0].dataValues.cant) - 1 ;
                       // console.log(aux);
                        let edicion = await db.user_product.update(
                            {
                                //los campos de la tabla que buscamos modificar
                                cant : aux
                            },{
                                //indicamos a que registro aplicamos los cambios 
                                where: {ID : req.params.tabla }
                            })
                    }
                }
                

                //let producto = await this.getOne(req.params.id);
            }catch(e){
                console.log(e);
            }
        },
        DeleteCarrito : async function(id){
            try{
                // indice = this.products.findIndex((elem)=>elem.id == id);
                // this.products.splice(indice,1);
                // fs.writeFileSync(productsFilePath,JSON.stringify(this.products),'utf-8');
                /////////
                let delet = await db.user_product.destroy(
                    {
                          where: {ID : id }
                      }
                  );

                }catch(e){
                    console.log(e);
                }
            },
            BuscarProductoCarrito: async function(req){
                try{
                    // y un where que 
                    // console.log(req.params);
                    let aux = await db.user_product.findAll({ 
                        where: {
                            ID_PRODUCT:parseInt(req.params.id_producto),
                            ID_USER: parseInt(req.params.id)
                          }
                     
                     });
                    //  console.log(aux[0].dataValues);
              
                    //  console.log(aux)
                     if(aux.length === 0){
                        return false;
                     }else{
                        return  true;
                     }
                    //  return aux;
                    }catch(e){
                        console.log(e);
                    }
                },

            AddProductoCarrito: async function(req){
                try{

                    let aux = await db.user_product.create({
                        ID_USER :req.params.id,
                        ID_PRODUCT : req.params.id_producto,
                        cant :1
                        
                    });
                     return aux;
                    }catch(e){
                        console.log(e);
                    }
                },

                allcoments: async function (id){
                    try {
                        let comentarios = await db.Comment.findAll({
                            where: {
                                id_product: id 
                            },
                            include: [
                                { association: "Products" },
                                { association: "Users" },
                            ]
                        });
                        return comentarios;
                        
                    } catch (error) {
                        
                        return [];
                    }    
                },

                createComment: async function(req,id){
                    try {
                        let newComment = await db.Comment.create({
                            id_product : req.params.id,
                            id_user: req.session.userLogged.id_user,
                            description: req.body.message,
                            star: req.body.starCount  ,
                            publication_date : new Date()
                        })
                        return newComment
                    } catch (error) {
                
                    }
                },
                
                



                
                    

}

module.exports = productService;




//para ver que regresa cada funcion del Service que voy configurando 
//$ node src/data/productService.js 
// la consulta tiene que ser asincrona, ya q las funciones son asincrenas y 
//con solo "console.log(), decia pendiente y no esperaba la respuesta"

// async function aux(){
//     try {
//         let aux = await productService.filter(req);
//         console.log(aux);
        
//     } catch (error) {
//         console.log(error);
//     }}

// aux();