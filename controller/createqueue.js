var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.createQueueUI = function (req, res) {
    console.log("Inside createQueueUI")
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('createQueue', {
        success: '',
        error: '',
    });
}

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
                res.render('createQueue', {
                    success: '',
                    error:'Error inserting queue!!'
                });
            else {
                mail.sendMail('comp231team4@gmail.com','arjunsk92@gmail.com','New Queue Created','Hey Arjun, This is the link to view the new queue => http://localhost:4200/api/queue/get/824187727/'+data.queueId,'Thenuask143@');
                console.log('queue created')
                res.render('createQueue', {
                    success: 'Successfully created Queue!',
                    error:''
                });
            }
        }

        var callbackModeratorCase = function (status, data) {
            if (status == 200) {
                mongoQueue.mongoDBQueueInsert(callbackInsertQueue, req.body.companyId, mongoConstants.collectionNameQueue, createQueueObj);
            } else if (status == 300) {
                res.render('createQueue', {
                    success: '',
                    error:'Invalid moderator!!'
                });
            }

        }

        var callbackExistCase = function (status, data) {
            if (status != 200)
                res.render('createQueue', {
                    success: '',
                    error:'No such company exist!!'
                });
            else {
                mongoShared.checkModeratorExist(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
            }
        }


        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        res.render('createQueue', {
            success: '',
            error:'Bad Request!!'
        });
    }
}


