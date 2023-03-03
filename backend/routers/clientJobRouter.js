const router = require('express').Router();
const { CreateJobAdvertise } = require('../controllers/jobController');
const client = require('../middlewares/client');
const authorize = require('../middlewares/authorize');

router.route('/advertise/new')
    .post([authorize, client], CreateJobAdvertise);

/*
/advertise/edit
/advetise/delete
*/


module.exports = router;