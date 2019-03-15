var express = require('express');
var router = express.Router();

router.get('/mtr-datepicker.min.css', function(req, res) {
    res.sendFile('node_modules/mtr-datepicker/dist/mtr-datepicker.min.css', {root: __basedir});
});
router.get('/mtr-datepicker.default-theme.min.css', function(req, res) {
    res.sendFile('node_modules/mtr-datepicker/dist/mtr-datepicker.default-theme.min.css', {root: __basedir});
});
router.get('/mtr-datepicker.min.js', function(req, res) {
    res.sendFile('node_modules/mtr-datepicker/dist/mtr-datepicker.min.js', {root: __basedir});
});

module.exports = router;