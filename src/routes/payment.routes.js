const express = require('express');
const routes = express.Router();
const paymentController = require('../controllers/paymentController');

routes.get('/pagar',paymentController.payment);
video = ("https://www.youtube.com/watch?v=QqiDandkcBY");

module.exports = routes;