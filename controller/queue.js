var random = require("../common/random");
var response = require("../common/response");
var mongoQueue = require("../model/queue");
var mongoShared = require("../model/shared");
var mongoConstants = require("../constants");
var apiControl = require("./api");
var mail = require("../common/mail");
var mongoCompany = require("../model/company");
var utility = require("../common/ultility");

exports.createQueue = function(req, res) {
  // create a simple queue
  console.log(req.body);
  console.log(req.params);
  if (
    // checking required parameters
    apiControl.createQueueMust(Object.keys(req.body), Object.values(req.body))
  ) {
    var createQueueObj = {};
    createQueueObj["queueId"] = random.getRandom(8);
    createQueueObj["createdDate"] = new Date(new Date().toUTCString());
    createQueueObj["lastUpdated"] = new Date(new Date().toUTCString());
    createQueueObj["status"] = mongoConstants.queueStatusActive;
    for (var key in req.body) {
      // check optional paramets
      if (apiControl.createQueueCan(key)) {
        if (key == mongoConstants.queueModeratorsKey) {
          var moderatorArray = [];
          // when making a queue, we can optionally add moderators, so we need to validate them
          if (Array.isArray(req.body[key])) {
            req.body[key].forEach(function(moderator) {
              if (!moderatorArray.includes(moderator))
                moderatorArray.push(moderator);
            });
          } else {
            moderatorArray.push(req.body[key]);
          }
          createQueueObj[key] = moderatorArray;
        } else if (key == mongoConstants.queueStartTimeKey || key == mongoConstants.queueCloseTimeKey) {
            createQueueObj[key] = utility.convertTimeStringtoMinuteString(req.body[key]);
        } else {
          createQueueObj[key] = req.body[key];
        }
      }
    }
    // callback after getting company
    var callbackGetCompany = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error getting company", status);
      else {
        mail.sendMail(
            mongoConstants.mailingEmail,
          data.email,
          "New Queue Created",
          "Hey Admin, \n A new queue was created. Please go to your dashboard to view the queue: "+mongoConstants.baseUrl +
            "\n\n\n This link is for users to add tickets to the queue:" +mongoConstants.baseUrl+"/api/user/ticket/create    Please pass the company id and queue Id and email as post parameters...",
            mongoConstants.mailingPassword
        );
        response.sendResponse(
          res,
          "Success, ID => " + createQueueObj["queueId"],
          200
        );
      }
    };
    // callback after queue insert
    var callbackInsertQueue = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error inserting queue", status);
      else {
        // get company details for notification purposes
        mongoCompany.mongoDBCompanyGet(
          callbackGetCompany,
          mongoConstants.globalDbName,
          mongoConstants.collectionNameCustomers,
          req.body.companyId
        );
      }
    };
    // callback after moderator check
    var callbackModeratorCase = function(status, data) {
      if (status == 200) {
        // function to insert queue to mongo
        mongoQueue.mongoDBQueueInsert(
          callbackInsertQueue,
          req.body.companyId,
          mongoConstants.collectionNameQueue,
          createQueueObj
        );
      } else if (status == 300) {
        response.sendResponse(res, "Invalid moderator", status);
      }
    };
    //callback after company exist check
    var callbackExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        if (data.email == req.params.authKey) {
          // checking moderator exists
          mongoShared.checkModeratorExist(
            callbackModeratorCase,
            req.body.companyId,
            mongoConstants.collectionNameModerator,
            req.body.moderator
          );
        } else {
          response.sendResponse(res, "Unauthorised User", 401);
        }
      }
    };
    // check if the company exist
    mongoShared.checkCustomerExist(
      callbackExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.body.companyId
    );
  } else {
    response.sendResponse(res, "Bad Request", 403);
  }
};

exports.updateQueue = function (req, res) {
    // update a queue
    if (apiControl.updateQueueMust(Object.keys(req.body), Object.values(req.body))) {
        var updQueueObj = {};
        updQueueObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.updateQueueCan(key)) {
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
                    updQueueObj[key] = moderatorArray;
                } else if (key == mongoConstants.queueStartTimeKey || key == mongoConstants.queueCloseTimeKey) {
                    updQueueObj[key] = utility.convertTimeStringtoMinuteString(req.body[key]);
                } else {
                    updQueueObj[key] = req.body[key];
                }
            }

        }
        var callbackGetCompany = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting company', status)
            else {
               // mail.sendMail('comp313.2019@gmail.com', data.email, 'Queue updated', 'Hey Admin, \n This is the link to view the updated queue => http://localhost:4200/admin/'+ req.params.authKey+'/queue/get/' + req.body.companyId + '/' + req.body.queueId, mongoConstants.mailingPassword);
                response.sendResponse(res, 'Success, ID => ' + req.body.queueId, 200)
            }
        }
        var callbackUpdateQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error updating queue', status)
            else {
                mongoCompany.mongoDBCompanyGet(callbackGetCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
            }
        }

        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoQueue.mongoDBQueueUpdate(callbackUpdateQueue, req.body.companyId, mongoConstants.collectionNameQueue, updQueueObj, req.body.queueId);
            }
        }


        var callbackModeratorCase = function (status, data) {
            if (status == 200) {
                mongoShared.checkQueueExist(callbackQueueExist, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            } else if (status == 300) {
                response.sendResponse(res, 'Invalid moderator', status)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey)
                    mongoShared.checkModeratorExist(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.body.moderator);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.deleteQueue = function (req, res) {
  // delete a queue
  if (apiControl.deleteQueueMust(Object.keys(req.body),Object.values(req.body))) {
      var createQueueObj = {};
      var callbackDeleteQueue = function (status, data) {
          if (status != 200)
              response.sendResponse(res, 'Error deleting queue', status)
          else {
              response.sendResponse(res, 'Success, deleted Queue ID => ' + req.body.queueId, 200)
          }
      }
      var callbackQueueExist = function (status, data) {
          if (status != 200)
              response.sendResponse(res, 'No such queue exist', status)
          else {
             mongoQueue.mongoDBQueueDelete(callbackDeleteQueue, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
          }
      }
      var callbackExistCase = function (status, data) {
          if (status != 200)
              response.sendResponse(res, 'No such company exist', status)
          else {
              if(data.email == req.params.authKey) {
                  mongoShared.checkQueueExist(callbackQueueExist, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
              } else {
                  response.sendResponse(res, 'Unauthorised User', 401)
              }
          }
      }
      mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
      
  } else {
      response.sendResponse(res, 'Bad Request', 403);
  }
}

exports.getQueue = function (req, res) {
    // get a queue
    if (req.originalUrl.startsWith('/moderator')) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        var callbackModeratorCase = function (status, data) {
            if (status != 200) {
                response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
            } else {
                mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    }
    else {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey)
                    mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    }
}

exports.getModeratorRelatedQueue = function (req, res) {
    var callbackGetQueue = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting queue', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status != 200) {
            response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
        } else {
            mongoQueue.mongoDBModeratorRelatedQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.authKey);
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
}

exports.getAllQueue = function (req, res) {
    // get all queue
    var callbackGetAllQueue = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting queue', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            if (data.email == req.params.authKey) {
                if (req.query.searchName) {
                    mongoQueue.mongoDBQueueGetAllWithSearch(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.query.searchName);
                } else {
                    mongoQueue.mongoDBQueueGetAll(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue);
                }
            }
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
}
