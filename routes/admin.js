// All the routes used in the application

var express = require("express");
var router = express.Router();
var createQueueController = require("../controller/createQueue");
var deleteQueueController = require("../controller/deleteQueue");
var updateQueueController = require("../controller/updateQueue");
var createCompanyController = require("../controller/createCompany");
var deleteCompanyController = require("../controller/deleteCompany");
var updateCompanyController = require("../controller/updateCompany");
var createModeratorController = require("../controller/createModerator");
var deleteModeratorController = require("../controller/deleteModerator");
var updateModeratorController = require("../controller/updateModerator");
var getModeratorController = require("../controller/getModerator");
var getCompanyController = require("../controller/getCompany");
var getQueueController = require("../controller/getQueue");
var uiController = require("../controller/ui");

// All the create cases, for company, moderator, queue and ticket
router.get("/moderator/create", function(req, res) {
  uiController.createModeratorUI(req, res);
});

//Create cases
router.post("/:authKey/queue/create", function(req, res) {
  createQueueController.createQueue(req, res);
});

router.post("/company/create", function(req, res) {
  createCompanyController.createCompany(req, res);
});

router.post("/:authKey/moderator/create", function(req, res) {
  createModeratorController.createModerator(req, res);
});

// All the delete cases, for company, moderator, queue and ticket
router.post("/:authKey/queue/delete", function(req, res) {
  deleteQueueController.deleteQueue(req, res);
});

router.post("/:authKey/company/delete", function(req, res) {
  deleteCompanyController.deleteCompany(req, res);
});

router.post("/:authKey/moderator/delete", function(req, res) {
  deleteModeratorController.deleteModerator(req, res);
});

// All the get cases, for company(s), moderator(s), queue(s) and ticket(s)
router.get("/:authKey/queue/get/:companyId/:queueId", function(req, res) {
  getQueueController.getQueue(req, res);
});

router.get("/:authKey/company/get/:companyId", function(req, res) {
  getCompanyController.getCompany(req, res);
});

router.get("/:authKey/queue/all/:companyId", function(req, res) {
  getQueueController.getAllQueue(req, res);
});

router.get("/:authKey/moderator/get/:companyId/:moderatorId", function(
  req,
  res
) {
  getModeratorController.getModerator(req, res);
});

router.get("/:authKey/moderator/all/:companyId", function(req, res) {
  getModeratorController.getAllModerators(req, res);
});

router.get("/company/all", function(req, res) {
  getCompanyController.getAllCompany(req, res);
});

// All the update cases, for company, moderator, queue and ticket
router.post("/:authKey/queue/update", function(req, res) {
  updateQueueController.updateQueue(req, res);
});

router.post("/:authKey/company/update", function(req, res) {
  updateCompanyController.updateCompany(req, res);
});

router.post("/:authKey/moderator/update", function(req, res) {
  updateModeratorController.updateModerator(req, res);
});

module.exports = router;
