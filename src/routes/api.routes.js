const express = require('express');
const routes = express.Router();
const apiController = require('../controllers/apiController');

routes.get("/users", apiController.list)

/* routes.get("/products", apiController.products) */

routes.get("/users/:id", apiController.getOne)

/* routes.get("/products/:id", apiController.productDetail) */


module.exports = routes;