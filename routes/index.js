var express = require('express');
var router = express.Router();

var search = require('elastic-api');

/* GET home page. */
router.get('/', search);

module.exports = router;
