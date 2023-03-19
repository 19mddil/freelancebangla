const { dbConnect, dbCreateUser, dbCreateJobAdvertise, dbFindAllAdvertiseJobs, dbGetJobAdvertiseDetail } = require('../mysql/dbControllers');

const formidable = require('formidable');

module.exports.CreateJobAdvertise = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    let connection = null;
    try {
        connection = await dbConnect('localhost');
    } catch (err) {
        return res.status(500).send(err.message);
    }
    form.parse(req, async (err, fields, files) => {
        try {
            const result = await dbCreateJobAdvertise(connection, { ...fields, client_id: req.user.id });
            connection.destroy();
            return res.status(201).send({ messeage: result });
        } catch (err) {
            connection.destroy();
            return res.status(500).send(err.message);
        }
    })
};

module.exports.DeleteJobAdvertise = async (req, res) => {

};

module.exports.UpdateJobAdvertise = () => {

}

module.exports.FindAllJobAdvertise = async (req, res) => {
    let connection = null;
    try {
        connection = await dbConnect('localhost');
    } catch (err) {
        return res.status(500).send(err.message);
    }
    try {
        const result = await dbFindAllAdvertiseJobs(connection);
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports.GetJobAdvertiseDetail = async (req, res) => {
    let connection = null;
    let jobId = req.params.id;
    try {
        connection = await dbConnect('localhost');
    } catch (err) {
        return res.status(500).send(err.message);
    }
    try {
        const result = await dbGetJobAdvertiseDetail(connection, jobId);
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}