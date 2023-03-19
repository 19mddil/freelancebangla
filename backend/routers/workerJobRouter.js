const router = require('express').Router();
const { FindAllJobAdvertise, GetJobAdvertiseDetail, PostJobApplication } = require('../controllers/jobController');
const worker = require('../middlewares/worker');
const authorize = require('../middlewares/authorize');

router.route('/advertisement')
    .get([authorize, worker], FindAllJobAdvertise);

router.route('/advertisement/:id')
    .get([authorize, worker], GetJobAdvertiseDetail);

router.route('/application/confirm')
    .post([authorize, worker], PostJobApplication);

module.exports = router;    