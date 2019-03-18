var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.deleteModerator = function (req, res) {
    // create a simple queue
    if (apiControl.deleteModeratorMust(Object.keys(req.body))) {
        var createQueueObj = {};
        var callbackDeleteModerator = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting moderator', status)
            else {
                response.sendResponse(res, 'Success, deleted Moderator ID => ' + req.body.moderatorId, 200)
            }
        }
        mongoModerator.mongoDBModeratorDelete(callbackDeleteModerator, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderatorId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


