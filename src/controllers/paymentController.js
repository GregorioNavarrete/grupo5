const express = require('express');

const paymentController ={

    payment : (req,res) => {
    res.send('pagando')
    }

}

module.exports = paymentController