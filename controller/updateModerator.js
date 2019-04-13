var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.updateModerator = function (req, res) {
    // update moderator
    if (apiControl.updateModeratorMust(Object.keys(req.body), Object.values(req.body))) {
        var updModeratorObj = {};
        updModeratorObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.updateModeratorCan(key))
                updModeratorObj[key] = req.body[key];
        }
        var callback = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error updating moderator', status)
            else {
                response.sendResponse(res, 'Success, ID => ' + req.body.moderatorId, 200)
            }
        }

        var callbackModeratorCase = function (status, data) {
            if (status != 200) {
                response.sendResponse(res, 'Invalid moderator', status)
            } else {
                mongoModerator.mongoDBModeratorUpdate(callback, req.body.companyId, mongoConstants.collectionNameModerator, updModeratorObj, req.body.moderatorId);
            }
        }

        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey)
                    mongoShared.checkModeratorExists(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderatorId);

                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}




