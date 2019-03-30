var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')



exports.getAllModerators = function (req, res) {
    // create a simple queue
    if (apiControl.getAllModeratorMust(Object.keys(req.params))) {
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


