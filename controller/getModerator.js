var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')

exports.getModerator = function (req, res) {
    // get a single moderator's details
    if (apiControl.getModeratorMust(Object.keys(req.params))) {
        var callbackGetModerator = function (status, data) {
            if (status != 200)
                res.render('viewModerator', {
                    success: '',
                    error:'Error getting moderator!!',
                    mod: data
                });
            else {
                res.render('viewModerator', {
                    success: '',
                    error:'',
                    mod: data
                });
            }
        }
        mongoQueue.mongoDBQueueGet(callbackGetModerator, req.params.companyId, mongoConstants.collectionNameQueue, req.params.moderatorId);
    } else {
        res.render('viewModerator', {
            success: '',
            error:'Bad Request!!',
            mod: null
        });
    }
}

exports.getAllModerators = function (req, res) {
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


