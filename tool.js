const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123abc",
    database: "student",
})
exports.module = mysql;
