const mysql = require('mysql');
module.exports.dbConnect = (dbhost) => {
    let promise = null;
    const connection = mysql.createConnection({
        host: dbhost,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    return new Promise((resolve, reject) => {
        connection.connect(function (err) {
            if (err) {
                reject(new Error(err.message));
            } else {
                resolve(connection);
            }
        })
    })
}