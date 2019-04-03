var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')



exports.getTicketPosition = function (req, res) {
    // create a simple queue
    if (apiControl.getTicketMust(Object.keys(req.params))) {
        var callbackGetTicketPosition = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket position', status)
                // res.render('viewQueue', {
                //     success: '',
                //     error:'Error getting queue!!',
                //     name:'',
                //     description: '',
                //     startTime: '',
                //     closeTime:'',
                // });
            else {
                response.sendResponse(res, data, 200)
                // res.render('viewQueue', {
                //     success: '',
                //     error:'',
                //     name: data.name,
                //     description: data.description,
                //     startTime: data.startTime,
                //     closeTime:data.closeTime,
                //     queueId:data.queueId,
                // });
            }
        }
        mongoTicket.mongoDBTicketGetPosition(callbackGetTicketPosition, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId,req.params.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
        // res.render('viewQueue', {
        //     success: '',
        //     error:'Bad Request!!',
        //     name:'',
        //     description: '',
        //     startTime: '',
        //     closeTime:'',
        // });
    }
}
exports.getTicket = function (req, res) {
    // create a simple queue
    if (apiControl.getTicketMust(Object.keys(req.params))) {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket', status)
                // res.render('viewQueue', {
                //     success: '',
                //     error:'Error getting queue!!',
                //     name:'',
                //     description: '',
                //     startTime: '',
                //     closeTime:'',
                // });
            else {
                response.sendResponse(res, data, 200)
                // res.render('viewQueue', {
                //     success: '',
                //     error:'',
                //     name: data.name,
                //     description: data.description,
                //     startTime: data.startTime,
                //     closeTime:data.closeTime,
                //     queueId:data.queueId,
                // });
            }
        }
        mongoTicket.mongoDBTicketGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId,req.params.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
        // res.render('viewQueue', {
        //     success: '',
        //     error:'Bad Request!!',
        //     name:'',
        //     description: '',
        //     startTime: '',
        //     closeTime:'',
        // });
    }
}



