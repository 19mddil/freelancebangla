const router = require('express').Router();
const { CreateJobAdvertise, FindAllJobAdvertiseByClientId, FindAllJobApplicantsByJobId, SelectJobApplicationByApplicationId } = require('../controllers/jobController');
const client = require('../middlewares/client');
const authorize = require('../middlewares/authorize');
router.route('/advertise/new')
    .post([authorize, client], CreateJobAdvertise);

router.route('/view/all/advertised/:client_id')
    .get([authorize, client], FindAllJobAdvertiseByClientId);

router.route('/view/all/application/:job_id/:client_id')
    .get([authorize, client], FindAllJobApplicantsByJobId);

router.route('/select/worker/application')
    .post([authorize, client], SelectJobApplicationByApplicationId);

/*
/advertise/edit
/advetise/delete
*/


module.exports = router;