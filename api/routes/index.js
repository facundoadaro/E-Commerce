var express = require('express');
var router = express.Router();
require("dotenv").config();

const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send('Anda piola loco')
});

module.exports = router;
