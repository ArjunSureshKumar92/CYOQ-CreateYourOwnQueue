var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


// create moderator
exports.createModerator = function (req, res) {
    // create a simple moderator
    if (apiControl.createModeratorMust(Object.keys(req.body), Object.values(req.body))) {
        var createModeratorObj = {};
        createModeratorObj['moderatorId'] = random.getRandom(8);
        createModeratorObj['createdDate'] = new Date(new Date().toUTCString())
        createModeratorObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.createModeratorCan(key))
                createModeratorObj[key] = req.body[key];
        }
        var callbackInsertCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting moderator', status)
            else {
                mail.sendMail('comp231team4@gmail.com', data.email, 'New Moderator Created', 'Hey Moderator, \n This is the link to your company dashboard => http://localhost:4200/moderator/'+data.moderatorId + '/'+req.body.companyId, 'comp231password');
                response.sendResponse(res, 'Success, ID => ' + data.moderatorId, 200)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                console.log(`${data.email}, ${req.params.authKey}`)
                if (data.email == req.params.authKey)
                    mongoModerator.mongoDBModeratorInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameModerator, createModeratorObj);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}

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

exports.getModerator = function (req, res) {
    var callbackGetModerator = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting moderator', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Invalid moderator', status)
        else {
            mongoModerator.mongoDBModeratorGet(callbackGetModerator, req.params.companyId, mongoConstants.collectionNameModerator, req.params.moderatorId);
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            if (data.email == req.params.authKey) {
                mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.moderatorId);
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
