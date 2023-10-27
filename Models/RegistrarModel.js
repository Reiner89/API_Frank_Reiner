const mysql = require("mysql2/promise"); // Importa la versión promise de mysql2
const config = require("../config");

async function Registrar(nombre, correo) {
  let code = 200;
  let descripcion = "excelente";
  let resultData;

  try {
    // Crea una conexión a la base de datos MySQL
    const connection = await mysql.createConnection(config);

    const [rows] = await connection.execute("CALL Insertar_Newletter(?, ?)", [
      nombre,
      correo,
    ]);

    resultData = rows;
    console.log("model exito");
    await connection.end(); // Cierra la conexión
  } catch (error) {
    code = 500; // Error interno del servidor
    descripcion = error.message;
    resultData = null;
    console.log("model error:", descripcion);
  }

  return {
    code: code,
    descripcion: descripcion,
    datos: resultData,
  };
}

module.exports = {
  Registrar: Registrar,
};
