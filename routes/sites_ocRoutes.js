const express = require('express');
const router = express.Router();
const jsonOcController = require('../controllers/sites_ocController');


router.get('/', jsonOcController.getsites_ocData);

module.exports = router;