const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123abc",
    database: "student",
})
exports.module = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            }
            connection.release();
            connection.query(sql, arr, (e, res) => {
                if (e) reject(e)
                resolve(res)
            })
        });

    })
}
// 干的不错
