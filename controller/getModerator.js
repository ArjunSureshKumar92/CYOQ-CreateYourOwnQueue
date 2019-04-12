var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getModerator = function (req, res) {
    // get a queue
    var callbackGetModerator = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting moderator', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status == 200) {
            mongoModerator.mongoDBModeratorGet(callbackGetModerator, req.params.companyId, mongoConstants.collectionNameModerator, req.params.moderatorId);
        } else if (status == 300) {
            response.sendResponse(res, 'Invalid moderator', status)
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            if (data.email == req.params.authKey) {
                mongoShared.checkModeratorExist(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
            }
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);

}
exports.getAllModerators = function (req, res) {
    // create all moderator
    var callbackGetAllModerator = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting moderator', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            if (data.email == req.params.authKey) {
                mongoModerator.mongoDBModeratorGetAll(callbackGetAllModerator, req.params.companyId, mongoConstants.collectionNameModerator);
            }
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
}


