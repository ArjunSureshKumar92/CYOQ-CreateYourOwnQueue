var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.updateQueue = function (req, res) {
    // update a queue
    if (apiControl.updateQueueMust(Object.keys(req.body))) {        
        var updQueueObj = {};
        updQueueObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.updateQueueCan(key))
            updQueueObj[key] = req.body[key];
        }
        var callbackUpdateQueue = function (status, data) {
            if (status != 200)
                //response.sendResponse(res, 'Error updating queue', status)
                res.render('viewQueue', {
                    success: '',
                    error:'Error updating queue!!',
                    name:'',
                    description: '',
                    startTime: '',
                    closeTime:'',
                });
            else {
                // mail.sendMail('comp231team4@gmail.com','sridhara.keshav@gmail.com','New Queue Created','Hey Esteban, This is the link to view the new queue => http://localhost:4200/dashboard/getQueue/'+data.queueId,'Thenuask143@');
               // response.sendResponse(res, 'Success, ID => ' + req.body.queueId, 200)
               res.render('viewQueue', {
                success: 'Queue Updated Successfully!!',
                error:'',
                name:req.body.name,
                description: req.body.description,
                startTime: req.body.startTime,
                closeTime:req.body.closeTime,
                queueId:req.body.queueId,
            });
            }
        }

        var callbackModeratorCase = function (status, data) {
            if(status == 200) {
                mongoQueue.mongoDBQueueUpdate(callbackUpdateQueue, req.body.companyId, mongoConstants.collectionNameQueue, updQueueObj, req.body.queueId);
            } else if(status == 300) {
                //response.sendResponse(res, 'Invalid moderator', status)
                res.render('viewQueue', {
                    success: '',
                    error:'Invalid moderator!!',
                    name:'',
                    description: '',
                    startTime: '',
                    closeTime:'',
                });
            }           
        }

        var callbackExistCase = function (status, data) {
            if (status != 200)
                //response.sendResponse(res, 'No such company exist', status)
                res.render('viewQueue', {
                    success: '',
                    error:'No such company exist!!',
                    name:'',
                    description: '',
                    startTime: '',
                    closeTime:'',
                });
            else {
                mongoShared.checkModeratorExist(callbackModeratorCase,req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
            }
        }

        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        //response.sendResponse(res, 'Bad Request', 403);
        res.render('viewQueue', {
            success: '',
            error:'Bad Request',
            name:'',
            description: '',
            startTime: '',
            closeTime:'',
        });
    }
}


