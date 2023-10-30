const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"inx_eco" 
});

db.connect();

module.exports = db;
