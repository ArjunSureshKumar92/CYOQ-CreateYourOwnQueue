var express = require('express');
var router = express.Router();

var createQueueController = require('../controller/createQueue');

router.get('/queue/create', function (req, res) {
    createQueueController.createQueueUI(req, res);
});