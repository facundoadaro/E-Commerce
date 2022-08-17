var express = require("express");
var router = express.Router();
require("dotenv").config();

const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

router.post("/checkout", function (req, res) {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

      res.redirect(response.body.init_point);

    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
