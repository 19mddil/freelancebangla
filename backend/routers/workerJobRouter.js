const router = require('express').Router();
const { FindAllJobAdvertise } = require('../controllers/jobController');
const worker = require('../middlewares/worker');
const authorize = require('../middlewares/authorize');

router.route('/advertisement')
    .get([authorize, worker], FindAllJobAdvertise);

module.exports = router;    