var express = require("express");
var router = express.Router();
var queueController = require("../controller/queue");
var companyController = require("../controller/company");
var moderatorController = require("../controller/moderator");

/**
 * All the routes that are starting with admin.
 */
//Create cases
router.post("/:authKey/queue/create", function(req, res) {
  queueController.createQueue(req, res);
});

router.post("/company/create", function(req, res) {
  companyController.createCompany(req, res);
});

router.post("/:authKey/moderator/create", function(req, res) {
  moderatorController.createModerator(req, res);
});

//Delete cases
router.post("/:authKey/queue/delete", function(req, res) {
  queueController.deleteQueue(req, res);
});

router.post("/:authKey/company/delete", function(req, res) {
  companyController.deleteCompany(req, res);
});

router.post("/:authKey/moderator/delete", function(req, res) {
  moderatorController.deleteModerator(req, res);
});

//Get cases
router.get("/:authKey/queue/get/:companyId/:queueId", function(req, res) {
  queueController.getQueue(req, res);
});

router.get("/:authKey/company/get/:companyId", function(req, res) {
  companyController.getCompany(req, res);
});

router.get("/:authKey/queue/all/:companyId", function(req, res) {
  queueController.getAllQueue(req, res);
});

router.get("/:authKey/moderator/get/:companyId/:moderatorId", function(
  req,
  res
) {
  moderatorController.getModerator(req, res);
});

router.get("/:authKey/moderator/all/:companyId", function(req, res) {
  moderatorController.getAllModerators(req, res);
});

router.get("/company/all", function(req, res) {
  companyController.getAllCompany(req, res);
});

//Update cases
router.post("/:authKey/queue/update", function(req, res) {
  queueController.updateQueue(req, res);
});

router.post("/:authKey/company/update", function(req, res) {
  companyController.updateCompany(req, res);
});

router.post("/:authKey/moderator/update", function(req, res) {
  moderatorController.updateModerator(req, res);
});

module.exports = router;
