let nextProductId=1;
let product = {

    libros:[
    {
        id: nextProductId++,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        precio: 20.50,
        sinopsis: "Cien años de soledad narra la historia de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo.",
        imagenPortada: "url_de_la_imagen1.jpg"
    },
    {
        id: nextProductId++,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        precio: 25.00,
        sinopsis: "Frodo Bolsón emprende un viaje para destruir un poderoso anillo y salvar a la Tierra Media de la oscuridad.",
        imagenPortada: "url_de_la_imagen2.jpg"
    },
    {
        id: nextProductId++,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        precio: 18.75,
        sinopsis: "Un joven mago llamado Harry Potter descubre su identidad en el mundo mágico mientras asiste a la escuela de magia Hogwarts.",
        imagenPortada: "url_de_la_imagen3.jpg"
    },
    {
        id: nextProductId++,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        precio: 15.50,
        sinopsis: "El principito es un cuento filosófico que narra las aventuras de un niño proveniente de un pequeño asteroide.",
        imagen_portada: "https://ejemplo.com/imagen_el_principito.jpg"
    },
    {
        id: nextProductId++,
        titulo: "1984",
        autor: "George Orwell",
        precio: 18.75,
        sinopsis: "1984 es una novela de ficción distópica que presenta un futuro totalitario y vigilado por un gobierno omnipresente.",
        imagen_portada: "https://ejemplo.com/imagen_1984.jpg"
    }

],
getAllProducts: function(){
    return this.libros;
},
getProductById:function(productId){
return this.libros.find(product => product.id == productId);
}
};
module.exports=product;