var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.createTicketUI = function (req, res) {
    console.log("Inside createTicketUI")
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('createTicket', {
        success: '',
        error: '',
    });
}

exports.createTicket = function (req, res) {
    // create a simple queue
    if (apiControl.createTicketMust(Object.keys(req.body))) {
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
                // res.render('createTicket', {
                //     success: '',
                //     error: 'Error inserting company',
                // });
            else {
                response.sendResponse(res, 'Success, ID => ' + data.ticketId, 200)
                // res.render('createTicket', {
                //     success: 'Successfully added a Ticket',
                //     error: '',
                // });
            }
        }
        var callbackCompanyExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
                // res.render('createTicket', {
                //     success: '',
                //     error: 'No such company exist',
                // });
            else {
                mongoShared.checkQueueExist(callbackQueueExistCase, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            }
        }

        var callbackQueueExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
                // res.render('createTicket', {
                //     success: '',
                //     error: 'No such queue exist',
                // });
            else {
                mongoTicket.mongoDBTicketInsert(callbackInsertCase, req.body.companyId, mongoConstants.collectionNameTicket, createTicketObj);
            }
        }
        mongoShared.checkCustomerExist(callbackCompanyExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
        // res.render('createTicket', {
        //     success: '',
        //     error: 'Bad Request',
        // });
    }

}




