const path = require('path');
const product=require('../model/product');

const productController = {

    index :  (req, res) => {
        res.render('products/index', product.getAllProducts());
      },

     cart:  (req, res) => {
      res.render('products/productCart');
      },

      getOne : (req, res) => {
        res.render('products/ProductDetail');
      }
}


module.exports = productController