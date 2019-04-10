var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getModerator = function (req, res) {
    // get a queue
    if (apiControl.getAllModeratorMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetModerator = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting moderator', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoModerator.mongoDBModeratorGet(callbackGetModerator, req.params.companyId, mongoConstants.collectionNameModerator, req.params.moderatorId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}
exports.getAllModerators = function (req, res) {
    // create all moderator
    if (apiControl.getAllModeratorMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetAllModerator = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting moderator', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoModerator.mongoDBModeratorGetAll(callbackGetAllModerator, req.params.companyId, mongoConstants.collectionNameModerator);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


