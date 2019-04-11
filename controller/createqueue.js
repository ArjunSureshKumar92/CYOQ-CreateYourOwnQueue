var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')
var mongoCompany = require('../model/company')


exports.createQueue = function (req, res) {
    // create a simple queue
    if (apiControl.createQueueMust(Object.keys(req.body), Object.values(req.body))) {
        var createQueueObj = {};
        createQueueObj['queueId'] = random.getRandom(8);
        createQueueObj['createdDate'] = new Date(new Date().toUTCString())
        createQueueObj['lastUpdated'] = new Date(new Date().toUTCString())
        createQueueObj['status'] = mongoConstants.queueStatusActive
        for (var key in req.body) {
            if (apiControl.createQueueCan(key)) {
                if (key == mongoConstants.queueModeratorsKey) {
                    var moderatorArray = [];
                    if (Array.isArray(req.body[key])) {
                        req.body[key].forEach(function (moderator) {
                            if (!moderatorArray.includes(moderator))
                                moderatorArray.push(moderator)
                        });
                    } else {
                        moderatorArray.push(req.body[key])
                    }
                    createQueueObj[key] = moderatorArray;
                } else {
                    createQueueObj[key] = req.body[key];
                }
            }
        }
        var callbackGetCompany = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting company', status)
            else {
                mail.sendMail('comp231team4@gmail.com',data.email,'New Queue Created','Hey Admin, \n This is the link to view the new queue => http://localhost:4200/admin/queue/get/'+req.body.companyId+'/'+createQueueObj['queueId']+'\n This link is for users to add tickets to the queue: http://localhost:4200/user/queue/'+req.body.companyId+'/'+createQueueObj['queueId']+'/ticketForm','comp231password');
                response.sendResponse(res, 'Success, ID => ' + createQueueObj['queueId'], 200)
            }
        }
        var callbackInsertQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting queue', status)
            else {
                mongoCompany.mongoDBCompanyGet(callbackGetCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
            }
        }

        var callbackModeratorCase = function (status, data) {
            if (status == 200) {
                mongoQueue.mongoDBQueueInsert(callbackInsertQueue, req.body.companyId, mongoConstants.collectionNameQueue, createQueueObj);
            } else if (status == 300) {
                response.sendResponse(res, 'Invalid moderator', status)
            }
        }

        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExist(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


