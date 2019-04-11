var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var util = require('../common/ultility')
var mail = require('../common/mail')


exports.createTicket = function (req, res) {
    // create a simple ticket
    if (apiControl.createTicketMust(Object.keys(req.body), Object.values(req.body))) {
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
                response.sendResponse(res, 'Error inserting ticket', status)
            else {
                mail.sendMail('comp231team4@gmail.com',data.email,'New Ticket Created','Hey User, \n Your ticket is created for the queue '+req.body.queueId +'\n To get your queue position go to http://localhost:4200/user/ticket/getposition/'+req.body.companyId+'/'+ req.body.queueId+'/'+data.ticketId,'comp231password');
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
                // check if status is active or time is invalid
                var date = new Date();
                if (data.status && data.status == mongoConstants.queueStatusInactive) {
                    response.sendResponse(res, 'Sorry, queue in closed at the moment...', status)
                } else if (data.startTime && data.closeTime && !util.isTimeWithinRange(data.startTime,data.closeTime, date.getHours()*60+date.getMinutes())) {
                    response.sendResponse(res, 'Sorry, queue in closed at the moment... Please try after '+util.minutesToHourString(data.startTime - (date.getHours()*60+date.getMinutes())), status)
                } else {
                    mongoTicket.mongoDBTicketInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameTicket, createTicketObj);
                }

            }
        }
        mongoShared.checkCustomerExist(callbackCompanyExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}




