const { dbConnect } = require('../mysql/dbControllers');
module.exports.dbTestPage = async (req, res) => {
    const mysql = require('mysql');
    let connection = null;
    let dbhost = '';
    if (process.env.NODE_ENV === 'production') {
        dbhost = process.env.DB_HOST_PRODUCTION;
    } else {
        dbhost = process.env.DB_HOST_LOCAL
    }
    // dbConn(dbhost)
    //     .then(result => res.send(result))
    //     .catch(err => res.send(err.message));
    try {
        connection = await dbConnect(dbhost);

    } catch (err) {
        return res.send(err.message);
    }

    console.log(connection.threadId);
    return res.send(`connection successful at threadId ${connection.threadId}`);

}