const express = require('express');
const router = express.Router();
const jsonMapController = require('../controllers/sites_mapController');


router.get('/', jsonMapController.getsites_mapData);

module.exports = router;