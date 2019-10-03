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




