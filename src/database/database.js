const mysql = require("promise-mysql");
const environment = require("../config");

const connection = mysql.createConnection({
    host: environment.host,
    database: environment.database,
    user: environment.user,
    password: environment.password
});

const getConnection = () =>{
    return connection
}

module.exports = {
    getConnection
}