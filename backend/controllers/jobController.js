const { dbConnect, dbCreateUser, dbCreateJobAdvertise } = require('../mysql/dbControllers');

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

module.exports.DeleteJobAdvertise = () => {

};

module.exports.UpdateJobAdvertise = () => {

}