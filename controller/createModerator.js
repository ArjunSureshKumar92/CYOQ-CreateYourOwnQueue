var random = require('../common/random')
var response = require('../common/response')
var mongoModerator = require('../model/moderator')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')



// create moderator
exports.createModerator = function (req, res) {
    // check if moderator has the required parameters
    if (apiControl.createModeratorMust(Object.keys(req.body), Object.values(req.body))) {
        var createModeratorObj = {};
        createModeratorObj['moderatorId'] = random.getRandom(8);
        createModeratorObj['createdDate'] = new Date(new Date().toUTCString())
        createModeratorObj['lastUpdated'] = new Date(new Date().toUTCString())
        // check if any optional parameters where also provided
        for (var key in req.body) {
            if (apiControl.createModeratorCan(key))
                createModeratorObj[key] = req.body[key];
        }
        // callback after moderator insert
        var callbackInsertCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting moderator', status)
            else {
                // function to send an email
                mail.sendMail('comp231team4@gmail.com', data.email, 'New Moderator Created', 'Hey Moderator, \n This is the link to your company dashboard => http://localhost:4200/moderator/'+data.moderatorId + '/'+req.body.companyId, 'comp231password');
                response.sendResponse(res, 'Success, ID => ' + data.moderatorId, 200)
            }
        }
        // callback function after the company exist test
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                console.log(`${data.email}, ${req.params.authKey}`)
                // check if the auth key is valid
                if (data.email == req.params.authKey)
                    // function to insert a new moderator to the database
                    mongoModerator.mongoDBModeratorInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameModerator, createModeratorObj);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        // check in mongo wherther the customer exist
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}




