const userService = require('../data/userService');
const productService = require('../data/productService');

function users(name, last_name, email,id_user){
  this.name = name
  this.last_name = last_name
  this.email = email
  this.detail  = "http://localhost:3000/api/users/"+id_user
}

function user(name, last_name, email,image){
    this.name = name
    this.last_name = last_name
    this.email = email
    this.image  = "/img/users/"+image
  }

  function product(title, subtitle, price, image, descrption, pages, edition, stock, discount, created, updated, authors, Supports, Collections, Languages, Editorials){
    this.title = title
    this.subtitle = subtitle
    this.price = price
    this.image  = "/img/portadas/"+image
    this.description = descrption
    this.pages = pages
    this.edition = edition
    this.stock = stock
    this.discount = discount
    this.created = created
    this.updated = updated
     this.authors = authors
    this.relations = {Supports, Collections, Languages, Editorials}
  }

  function products(id_product, title, price, image, descrption, Supports, Collections, Languages, Editorials, authors){
    this.id = id_product
    this.title = title
    this.price = price
    this.image  = "/img/portadas/"+image
    this.description = descrption
    this.relations = {Supports, Collections, Languages, Editorials, authors}

    this.detail  = "http://localhost:3000/api/products/"+id_product

  }

  function genres(id_genre, name, image, products){
    this.id = id_genre
    this.name = name
    this.image = image
    this.product = products.name
    this.count = products.length
  }

 


const apiController = {

    list: async function (req, res) {
        try {
         
          let allUsers = await userService.getData();
          let newUsers = allUsers.map(usuario=> new users(usuario.name, usuario.last_name, usuario.email,usuario.id_user))
          res.status(200).json({
            count: allUsers.length,
            users: newUsers,
            
            
          });
          
        } catch (error) { 
          console.log(error.message);
          res.set('Content-Type', 'text/plain')
          res.send("Error inesperado").status(500)
        }
      },
      getOne: async function (req, res) {
        try {
          let oneUser = await userService.getOne(req.params.id);
          let User = new user(oneUser.name, oneUser.last_name, oneUser.email, oneUser.image);
          res.status(200).json({User});
        } catch (e) {
          res.send(e);
        }
      },

      getOneProduct:  async function (req, res) {
        try {
          let oneProduct = await productService.getOne(req.params.id);
          let Product = new product(oneProduct.title, oneProduct.subtitle, oneProduct.price, oneProduct.image, oneProduct.description, oneProduct.pages, oneProduct.edition, oneProduct.stock, oneProduct.discount, oneProduct.created, oneProduct.updated, oneProduct.authors, oneProduct.Supports, oneProduct.Collections, oneProduct.Languages, oneProduct.Editorials);
          res.status(200).json({Product});
        } catch (e) {
          res.send(e);
        }
      },

      countByGenres: async function(req, res) {
       try {
        let generos = await productService.fiandGenres();
        let countGenres = generos.map(genero=> new genres(genero.id_genre, genero.name, genero.image, genero.products, genero.count))
        let allProducts = await productService.getAll();
        let mapProducts = allProducts.map(producto=> new products (producto.id_product, producto.title, producto.price, producto.image, producto.description, producto.Supports, producto.Collections, producto.Languages, producto.Editorials, producto.authors[0].name))
        res.status(200).json({
          count: allProducts.length,
          countByCategory: countGenres,
          products: mapProducts,
        });
       } catch (e) {
        
       }
      }

    }

    module.exports=apiController
