var express = require("express");
var router = express.Router();
require("dotenv").config();

const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

router.get("/hola", function (req, res) {
  res.send('alo')
});

router.post("/checkout", function (req, res) {

    const { unit_price } = req.body;

  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "E-Commerce Shopping Cart",
        unit_price: unit_price,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      res.send(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
