var express = require('express');
var router = express.Router();

var uiController = require('../controller/ui');

router.get('/queue/create', function (req, res) {
    uiController.createQueueUI(req, res);
});

router.get('/company/create', function (req, res) {
    uiController.createCompanyUI(req,res);
});

router.get('/admin/:adminId/moderator/create', function (req, res) {
    uiController.createModeratorUI(req,res);
});

router.get('/queue/register/:queueId', function(req, res) {
    uiController.registerQueueUI(req,res);
});