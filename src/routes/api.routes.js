const express = require('express');
const routes = express.Router();
const apiController = require('../controllers/apiController');

routes.get("/users", apiController.list)

routes.get("/products", apiController.countByGenres)

routes.get("/users/:id", apiController.getOne)

routes.get("/products/:id", apiController.getOneProduct)


module.exports = routes;