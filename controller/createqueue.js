var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.createQueue = function (req, res) {
    // create a simple queue
    if (apiControl.createQueueMust(Object.keys(req.body))) {
        var createQueueObj = {};
        createQueueObj['queueId'] = random.getRandom(8);
        createQueueObj['createdDate'] = new Date(new Date().toUTCString())
        createQueueObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.createQueueCan(key))
                createQueueObj[key] = req.body[key];
        }
        var callbackInsertQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting queue', status)
            else {
                // mail.sendMail('comp231team4@gmail.com','sridhara.keshav@gmail.com','New Queue Created','Hey Esteban, This is the link to view the new queue => http://localhost:3000/dashboard/getQueue/'+data.queueId,'Thenuask143@');
                response.sendResponse(res, 'Success, ID => ' + data.queueId, 200)
                console.log('queue created')
            }
        }

        var callbackModeratorCase = function (status, data) {
            if(status == 200) {
                mongoQueue.mongoDBQueueInsert(callbackInsertQueue, req.body.companyId, mongoConstants.collectionNameQueue, createQueueObj);
            } else if(status == 300) {
                response.sendResponse(res, 'Invalid moderator', status)
            }
           
        }

        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExist(callbackModeratorCase,req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
            }
        }


        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


