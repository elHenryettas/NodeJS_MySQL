const express = require("express");
const morgan = require("morgan");
const environment = require("./config");
const router = require("./routes/index")


const PORT = environment.port ||  4000
const app = express();


app.set("port", PORT);
app.use(morgan("dev"));
app.use(express.json())

app.use("/api", router)

module.exports = app;
