const dotenv = require("dotenv")
dotenv.config();

const environment = {
    port: process.env.PORT || "",
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
}
module.exports = environment;