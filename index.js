const express = require("express");
const route = require("./Routers/routes");

const app = express();

app.listen(9000, "localhost");
app.use(route);

console.log("http://localhost:9000");
