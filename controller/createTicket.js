var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.createTicket = function (req, res) {
    // create a simple ticket
    if (apiControl.createTicketMust(Object.keys(req.body),Object.values(req.body))) {
        var createTicketObj = {};
        createTicketObj['ticketId'] = random.getRandom(8);
        createTicketObj['createdDate'] = new Date(new Date().toUTCString())
        createTicketObj['lastUpdated'] = new Date(new Date().toUTCString())
        createTicketObj['status'] = mongoConstants.ticketStatusWait
        for (var key in req.body) {
            if (apiControl.createTicketCan(key))
                createTicketObj[key] = req.body[key];
        }
        var callbackInsertCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting company', status)
            else {
                response.sendResponse(res, 'Success, ID => ' + data.ticketId, 200)
            }
        }
        var callbackCompanyExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkQueueExist(callbackQueueExistCase, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            }
        }

        var callbackQueueExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoTicket.mongoDBTicketInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameTicket, createTicketObj);
            }
        }
        mongoShared.checkCustomerExist(callbackCompanyExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}




