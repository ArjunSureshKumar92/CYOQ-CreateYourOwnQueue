var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.deleteModerator = function (req, res) {
    // delete a moderator
    if (apiControl.deleteModeratorMust(Object.keys(req.body),Object.values(req.body))) {
        var callbackDeleteModerator = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting moderator', status)
            else {
                response.sendResponse(res, 'Success, deleted Moderator ID => ' + req.body.moderatorId, 200)
            }
        }
        var callbackModeratorCase = function (status, data) {
            if (status == 200) {
               mongoModerator.mongoDBModeratorDelete(callbackDeleteModerator, req.body.companyId, mongoConstants.collectionNameModerator,mongoConstants.collectionNameQueue, req.body.moderatorId);
            } else if (status == 300) {
                response.sendResponse(res, 'Invalid moderator', status)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if(data.email == req.params.authKey) {
                    mongoShared.checkModeratorExist(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderatorId);
                } else {
                    response.sendResponse(res, 'Unauthorised User', 401)
                }
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
        
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


