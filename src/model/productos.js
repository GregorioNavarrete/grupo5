

let nextProductId = 1;
const producto = {
    libros: [
    {
        id: nextProductId++,
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        descripcion: "La historia de un joven pastor en busca de su tesoro personal y su destino.",
        precio: 12.50,
        portada: "https://ejemplo.com/portadas/el-alquimista.jpg"
      },

      {
        id: nextProductId++,
        titulo: "1984",
        autor: "George Orwell",
        descripcion: "Una novela distópica que explora temas de vigilancia, represión y control totalitario.",
        precio: 19.75,
        portada: "https://ejemplo.com/portadas/1984.jpg"
      },

      {
        id: nextProductId++,
        titulo: "Cazadores de Sombras: Ciudad de Hueso",
        autor: "Cassandra Clare",
        descripcion: "Una novela llena de acción y fantasía que sigue la vida de Clary Fray en un mundo de cazadores de sombras y seres sobrenaturales.",
        precio: 15.99,
        portada: "url_de_la_imagen1.jpg"
      },

      {
        id: nextProductId++,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        descripcion: "Una historia filosófica y conmovedora sobre un niño que viaja por diferentes planetas y aprende sobre la amistad y la vida.",
        precio: 12.50,
        portada: "url_de_la_imagen2.jpg"
      },

      {
        id: nextProductId++,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        descripcion: "La historia de un niño mago que descubre un mundo de magia y aventuras en la escuela Hogwarts.",
        precio: 15.99,
        portada: "url_de_la_portada1.jpg"
      },
],

getAllProducts: function(){
    return this.libros;
},
getProductByName: function(productName) {
    return this.libros.find(producto => producto.titulo === productName);
},
getProductById: function(productId) {
    return this.libros.find(producto => product.id == productId);
},

};

module.exports = producto;