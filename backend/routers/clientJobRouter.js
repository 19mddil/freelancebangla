const router = require('express').Router();
const { CreateJobAdvertise, FindAllJobAdvertise } = require('../controllers/jobController');
const client = require('../middlewares/client');
const authorize = require('../middlewares/authorize');

router.route('/advertise/new')
    .post([authorize, client], CreateJobAdvertise);

router.route('/view/all/advertised')
    .get([authorize, client], FindAllJobAdvertise);

/*
/advertise/edit
/advetise/delete
*/


module.exports = router;