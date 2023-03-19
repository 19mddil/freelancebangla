const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports.genJWT = function ({ id, email, password, role, submission_time }) {
    return new Promise((resolve, reject) => {
        console.log(process.env.JWT_SECRET_KEY);
        const token = jwt.sign({
            id: id,
            email: email,
            password: password,
            role: role,
            submission_time: submission_time
        }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
        if (token) {
            resolve(token);
        } else {
            reject(new Error("jwt token generation error"));
        }
    })

}

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

module.exports.dbCreateUser = (connection, { email, password, role }) => {
    return new Promise((resolve, reject) => {
        const userInsertionSql = `INSERT INTO freela13_freelancebangla.users (email,password,role) VALUES ('${email}', '${password}','${role}')`;
        const roles = ['admin', 'client', 'worker'];
        if (!roles.includes(role)) {
            reject(new Error(`there is no role for your specified alike ${role}`))
            return;
        }
        connection.query(userInsertionSql, function (error, result, fields) {
            if (error) reject(error);
            else {
                console.log(result);
                console.log(fields);
                resolve(result);
            }
        })
    })

}

module.exports.dbFindUserByEmail = (connecion, email) => {
    return new Promise((resolve, reject) => {
        const userFindSql = `SELECT * FROM freela13_freelancebangla.users WHERE email = '${email}';`;
        connecion.query(userFindSql, function (error, result, fields) {
            if (error) reject(error);
            else {
                resolve(result);
            }
        })
    })
}

module.exports.dbFindUserByEmailByRole = (connecion, email, role) => {
    return new Promise((resolve, reject) => {
        const userFindSql = `SELECT * FROM freela13_freelancebangla.users WHERE email = '${email}' AND role = '${role}';`;
        connecion.query(userFindSql, function (error, result, fields) {
            if (error) {
                reject(error)
            }
            else if (result.length < 1) {
                reject(new Error("Email or Password Error"));
            }
            else {
                resolve(result);
            }
        })
    })
}

module.exports.dbCreateJobAdvertise = (connecion, { title, applicationEndingTime, startingDate, tags, client_id }) => {
    //console.log(title, applicationEndingTime, startingDate, tags, client_id);
    return new Promise((resolve, reject) => {
        const createJobAdvertiseSql = `INSERT INTO freela13_freelancebangla.advertised_jobs (client_id, title, required_skills, starting_date, application_ending_date) VALUES ('${client_id}', '${title}', '${tags}', '${startingDate}', '${applicationEndingTime}')`;
        connecion.query(createJobAdvertiseSql, function (error, result, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })

};

module.exports.dbFindAllAdvertiseJobs = (connecion) => {
    return new Promise((resolve, reject) => {
        const findAllJobAdvertiseSql = `SELECT * FROM freela13_freelancebangla.advertised_jobs`;
        connecion.query(findAllJobAdvertiseSql, function (error, result, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(result)
            }
        })
    })
}

module.exports.dbGetJobAdvertiseDetail = (connection, id) => {
    return new Promise((resolve, reject) => {
        const getJobAdvertiseDetail = `SELECT * FROM freela13_freelancebangla.advertised_jobs where id = '${id}'`;
        connection.query(getJobAdvertiseDetail, function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result[0]);
            }
        })
    })
}


