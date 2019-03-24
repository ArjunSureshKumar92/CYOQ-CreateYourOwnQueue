var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.createModeratorUI = function (req, res) {
    console.log("Inside createCompanyUI")
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('createModerator', {
        success: '',
        error: '',
    });
}

exports.createModerator = function (req, res) {
    // create a simple queue
    if (apiControl.createModeratorMust(Object.keys(req.body))) {
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
                // response.sendResponse(res, 'Error inserting company', status)
                res.render('createModerator', {
                    success: '',
                    error: 'Error inserting company',
                });
            else {
                //response.sendResponse(res, 'Success, ID => ' + data.moderatorId, 200)
                res.render('createModerator', {
                    success: 'Successfully added moderator => ' + data.moderatorId,
                    error: '',
                });
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                //response.sendResponse(res, 'No such company exist', status)
                res.render('createModerator', {
                    success: '',
                    error: 'No such company exist',
                });
            else {
                mongoModerator.mongoDBModeratorInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameModerator, createModeratorObj);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        //response.sendResponse(res, 'Bad Request', 403);
        res.render('createModerator', {
            success: '',
            error: 'Bad Request',
        });
    }

}




