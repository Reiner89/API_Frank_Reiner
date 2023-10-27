const express = require("express");
const controller = require("../Controllers/Controller");

const route = express.Router();

route.use(express.json());

route.use(express.urlencoded({ extended: false }));

route.post("/Ana", (req, res) => {
  controller.Iniciar(req, res);
});

module.exports = route;
