const { homePage } = require('../controllers/homeController');
const router = require('express').Router();

router.route('/')
    .get(homePage);

module.exports = router;
