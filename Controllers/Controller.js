// const Modelo = require('../../shared/entities/Resultado.model');  // Importamos la clase Modelo
const query = require("../Models/RegistrarModel");
const Modelo = require("../Entities/Respuesta");

async function ExecuteRegistrar(req, res) {
  try {
    const { nombre, correo } = req.body;

    const queryResult = await query.Registrar(nombre, correo);

    const datos = queryResult.datos;
    const datosRegistro = datos;
    const objModelo = new Modelo(
      queryResult.code,
      queryResult.descripcion,
      datosRegistro
    );
    return objModelo;
  } catch (error) {
    const errorController = error.message;
    const objModelo = new Modelo(400, errorController, null);

    return objModelo;
  }
}

async function Iniciar(req, res) {
  const mensaje = await ExecuteRegistrar(req, res);
  res.json(mensaje);
  res.end();
}

module.exports = {
  Iniciar: Iniciar,
};
