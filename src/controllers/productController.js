const path = require('path');


const productController = {

    index :  (req, res) => {
        res.render('products/index');
      },

     cart:  (req, res) => {
      res.render('products/productCart');
      },

      getOne : (req, res) => {
        res.render('products/ProductDetail');
      }
}


module.exports = productController