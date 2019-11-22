var random = require("../common/random");
var response = require("../common/response");
var mongoTicket = require("../model/ticket");
var mongoShared = require("../model/shared");
var mongoConstants = require("../constants");
var apiControl = require("./api");
var util = require("../common/ultility");
var mail = require("../common/mail");

global.queueName = "";

exports.createTicket = function(req, res) {
  // create a simple ticket
  console.log("Create Ticket Called " + req.body);
  if (
    apiControl.createTicketMust(Object.keys(req.body), Object.values(req.body))
  ) {
    console.log("All data is there to create a ticket");
    var createTicketObj = {};
    createTicketObj["ticketId"] = random.getRandom(8);
    createTicketObj["createdDate"] = new Date(new Date().toUTCString());
    createTicketObj["lastUpdated"] = new Date(new Date().toUTCString());
    createTicketObj["status"] = mongoConstants.ticketStatusWait;
    for (var key in req.body) {
      if (apiControl.createTicketCan(key)) createTicketObj[key] = req.body[key];
    }
    var callbackInsertCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error inserting ticket", status);
      else {
        mail.sendMail(
          mongoConstants.mailingEmail,
          data.email,
          "New Ticket Created",
          "Hey User, \n Your ticket is created for the queue " +
            queueName +
            "\n Go to " +
            mongoConstants.baseUrl +
            "/api/user/" +
            data.email +
            "/queue/get/" +
            req.body.companyId +
            "\n To get your queue position go to " +
            mongoConstants.baseUrl +
            "/api/user/" +
            req.body.email +
            "/ticket/getposition/" +
            req.body.companyId +
            "/" +
            req.body.queueId +
            "/" +
            data.ticketId,
          mongoConstants.mailingPassword
        );
        response.sendResponse(res, "Success, ID => " + data.ticketId, 200);
      }
    };
    var callbackQueueExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such queue exist", status);
      else {
        // check if status is active or time is invalid
        var date = new Date();
        if (data.status && data.status == mongoConstants.queueStatusInactive) {
          response.sendResponse(
            res,
            "Sorry, queue in closed at the moment...",
            status
          );
        } else if (
          data.startTime &&
          data.closeTime &&
          !util.isTimeWithinRange(
            data.startTime,
            data.closeTime,
            date.getHours() * 60 + date.getMinutes()
          )
        ) {
          response.sendResponse(
            res,
            "Sorry, queue in closed at the moment... Please try after " +
              util.minutesToHourString(
                data.startTime,
                date.getHours() * 60 + date.getMinutes()
              ),
            status
          );
        } else {
          queueName = data.name;
          createTicketObj["queueName"] = queueName;
          mongoTicket.mongoDBTicketInsert(
            callbackInsertCase,
            req.body.companyId,
            mongoConstants.collectionNameTicket,
            createTicketObj
          );
        }
      }
    };
    var callbackCompanyExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkQueueExist(
          callbackQueueExistCase,
          req.body.companyId,
          mongoConstants.collectionNameQueue,
          req.body.queueId
        );
      }
    };
    mongoShared.checkCustomerExist(
      callbackCompanyExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.body.companyId
    );
  } else {
    response.sendResponse(res, "Bad Request", 403);
  }
};

exports.closeTicket = function(req, res) {
  // update a ticket
  if (
    apiControl.closeTicketMust(Object.keys(req.body), Object.values(req.body))
  ) {
    var closeTicketObj = {};
    closeTicketObj["lastUpdated"] = new Date(new Date().toUTCString());
    for (var key in req.body) {
      if (apiControl.closeTicketCan(key)) closeTicketObj[key] = req.body[key];
    }

    var callbackCloseTicket = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error closing ticket", status);
      else {
        if (data) {
          response.sendResponse(
            res,
            "Success, closed Ticket ID => " + req.body.ticketId,
            200
          );
        } else {
          response.sendResponse(
            res,
            "Error closing ticket, the ticket is not active at the moment",
            422
          );
        }
      }
    };
    var callbackTicketExistCase = function(status) {
      if (status != 200)
        response.sendResponse(res, "No such ticket exist", status);
      else {
        closeTicketObj["status"] = mongoConstants.ticketStatusDone;
        mongoTicket.mongoDBTicketClose(
          callbackCloseTicket,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          req.body.ticketId,
          closeTicketObj
        );
      }
    };
    var callbackModeratorCase = function(status) {
      if (status != 200) {
        response.sendResponse(
          res,
          "Unauthorised User or Invalid moderator",
          401
        );
      } else {
        mongoShared.checkTicketExist(
          callbackTicketExistCase,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          req.body.ticketId
        );
      }
    };
    var callbackExistCase = function(status) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkModeratorExists(
          callbackModeratorCase,
          req.body.companyId,
          mongoConstants.collectionNameModerator,
          req.params.authKey
        );
      }
    };
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

exports.nextTicket = function(req, res) {
  if (
    apiControl.nextTicketMust(Object.keys(req.body), Object.values(req.body))
  ) {
    var nextTicketObj = {};
    nextTicketObj["lastUpdated"] = new Date(new Date().toUTCString());
    for (var key in req.body) {
      if (apiControl.nextTicketCan(key)) nextTicketObj[key] = req.body[key];
    }
    var callbackNextTicket = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error getting next ticket", status);
      else {
        mail.sendMail(
          mongoConstants.mailingEmail,
          data.email,
          "Active User",
          "Hey User, \n Your ticket is now active for the queue: " + queueName,
          mongoConstants.mailingPassword
        );
        sendNotificationToNextInLine();
        response.sendResponse(
          res,
          "Success, Active Ticket ID => " + data.ticketId,
          200
        );
      }
    };
    var callbackGetWaitingTicket = function(status, data) {
      if (status == 500) {
        response.sendResponse(res, "Error getting waiting tickets", status);
      } else if (status == 422) {
        response.sendResponse(res, "No waiting tickets", status);
      } else {
        nextTicketObj["status"] = mongoConstants.ticketStatusActive;
        nextTicketObj["servedBy"] = req.params.authKey;
        mongoTicket.mongoDBTicketNext(
          callbackNextTicket,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          data.ticketId,
          nextTicketObj
        );
      }
    };
    var callbackQueueExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such queue exist", status);
      else {
        queueName = data.name;
        if (data.status && data.status == mongoConstants.queueStatusInactive) {
          response.sendResponse(
            res,
            "Sorry, queue in closed at the moment...",
            status
          );
        } else {
          mongoTicket.mongoDBWaitGetNext(
            callbackGetWaitingTicket,
            req.body.companyId,
            mongoConstants.collectionNameTicket,
            req.body.queueId,
            mongoConstants.ticketStatusWait
          );
        }
      }
    };
    var callbackGetActiveTicket = function(status) {
      if (status != 200) {
        mongoShared.checkQueueExist(
          callbackQueueExistCase,
          req.body.companyId,
          mongoConstants.collectionNameQueue,
          req.body.queueId
        );
      } else {
        response.sendResponse(
          res,
          "Error, A ticket is already active. Please close it and try again...",
          442
        );
      }
    };
    var callbackModeratorCase = function(status) {
      if (status != 200) {
        response.sendResponse(
          res,
          "Unauthorised User or Invalid moderator",
          401
        );
      } else {
        mongoTicket.mongoDBTicketActiveGet(
          callbackGetActiveTicket,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          req.params.authKey,
          req.body.queueId,
          mongoConstants.ticketStatusActive
        );
      }
    };
    var callbackExistCase = function(status) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkModeratorExists(
          callbackModeratorCase,
          req.body.companyId,
          mongoConstants.collectionNameModerator,
          req.params.authKey
        );
      }
    };
    mongoShared.checkCustomerExist(
      callbackExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.body.companyId
    );
  } else {
    response.sendResponse(res, "Bad Request", 403);
  }

  var sendNotificationToNextInLineCallback = function(status, data) {
    if (status == 200) {
      mail.sendMail(
        mongoConstants.mailingEmail,
        data.email,
        "Next In Queue",
        "Hey User, \n Your ticket for the queue: " +
          queueName +
          " is now next in line... Please get ready!!",
        mongoConstants.mailingPassword
      );
    }
  };

  function sendNotificationToNextInLine() {
    mongoTicket.mongoDBWaitGetNext(
      sendNotificationToNextInLineCallback,
      req.body.companyId,
      mongoConstants.collectionNameTicket,
      req.body.queueId,
      mongoConstants.ticketStatusWait
    );
  }
};

exports.deleteTicket = function(req, res) {
  // delete a queue
  if (
    apiControl.deleteTicketMust(Object.keys(req.body), Object.values(req.body))
  ) {
    var callbackDeleteTicket = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error deleting ticket", status);
      else {
        mail.sendMail(
          mongoConstants.mailingEmail,
          data.email,
          "Ticket Deleted",
          "Hey User, \n Your Ticket " + req.body.ticketId + " has been deleted",
          mongoConstants.mailingPassword
        );
        response.sendResponse(
          res,
          "Success, deleted Ticket ID => " + req.body.ticketId,
          200
        );
      }
    };
    var callbackGetTicketPosition = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such ticket exist", status);
      else {
        if (data == 0) {
          response.sendResponse(
            res,
            "You are the active ticket holder. Cannot delete your ticket now...",
            status
          );
          return;
        }
        if (data == 1) {
          response.sendResponse(
            res,
            "You are the next in queue. Cannot delete your ticket now...",
            status
          );
          return;
        }
        if (data == -1) {
          response.sendResponse(
            res,
            "You ticket is already closed. Cannot delete your ticket now...",
            status
          );
          return;
        }
        mongoTicket.mongoDBTicketDelete(
          callbackDeleteTicket,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          req.body.ticketId,
          mongoConstants.ticketStatusCancel
        );
      }
    };
    var callbackExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such ticket exists", 422);
      else {
        if (data.email == req.params.authKey)
          mongoTicket.mongoDBTicketGetPosition(
            callbackGetTicketPosition,
            req.body.companyId,
            mongoConstants.collectionNameTicket,
            data.queueId,
            req.body.ticketId
          );
        else {
          response.sendResponse(res, "Unauthorised User", 401);
        }
      }
    };
    var callbackCompanyExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkTicketExist(
          callbackExistCase,
          req.body.companyId,
          mongoConstants.collectionNameTicket,
          req.body.ticketId
        );
      }
    };
    mongoShared.checkCustomerExist(
      callbackCompanyExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.body.companyId
    );
  } else {
    response.sendResponse(res, "Bad Request", 403);
  }
};

exports.getTicketPosition = function(req, res) {
  // get a ticket position
  var callbackGetTicketPosition = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "Error getting ticket position", status);
    else {
      response.sendResponse(res, data, 200);
    }
  };
  var callbackTicketExistCase = function(status, data) {
    if (status != 200) response.sendResponse(res, "No such ticket exist", 401);
    else {
      if (data.email == req.params.authKey)
        mongoTicket.mongoDBTicketGetPosition(
          callbackGetTicketPosition,
          req.params.companyId,
          mongoConstants.collectionNameTicket,
          req.params.queueId,
          req.params.ticketId
        );
      else response.sendResponse(res, "Unauthorised User", 401);
    }
  };
  var callbackQueueExist = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such queue exist", status);
    else {
      mongoShared.checkTicketExist(
        callbackTicketExistCase,
        req.params.companyId,
        mongoConstants.collectionNameTicket,
        req.params.ticketId
      );
    }
  };
  var callbackExistCase = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such company exist", status);
    else {
      mongoShared.checkQueueExist(
        callbackQueueExist,
        req.params.companyId,
        mongoConstants.collectionNameQueue,
        req.params.queueId
      );
    }
  };
  mongoShared.checkCustomerExist(
    callbackExistCase,
    mongoConstants.globalDbName,
    mongoConstants.collectionNameCustomers,
    req.params.companyId
  );
};
exports.getTicket = function(req, res) {
  if (req.originalUrl.startsWith("/user")) {
    var callbackGetTicket = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error getting ticket", status);
      else {
        response.sendResponse(res, data, 200);
      }
    };
    var callbackTicketExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such ticket exist", 401);
      else {
        if (data.email == req.params.authKey)
          mongoTicket.mongoDBTicketGet(
            callbackGetTicket,
            req.params.companyId,
            mongoConstants.collectionNameTicket,
            req.params.queueId,
            req.params.ticketId
          );
        else response.sendResponse(res, "Unauthorised User", 401);
      }
    };
    var callbackQueueExist = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such queue exist", status);
      else {
        mongoShared.checkTicketExist(
          callbackTicketExistCase,
          req.params.companyId,
          mongoConstants.collectionNameTicket,
          req.params.ticketId
        );
      }
    };
    var callbackExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkQueueExist(
          callbackQueueExist,
          req.params.companyId,
          mongoConstants.collectionNameQueue,
          req.params.queueId
        );
      }
    };
    mongoShared.checkCustomerExist(
      callbackExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.params.companyId
    );
  } else {
    var callbackGetTicket = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "Error getting ticket", status);
      else {
        response.sendResponse(res, data, 200);
      }
    };
    var callbackTicketExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such ticket exist", status);
      else {
        mongoTicket.mongoDBTicketGet(
          callbackGetTicket,
          req.params.companyId,
          mongoConstants.collectionNameTicket,
          req.params.queueId,
          req.params.ticketId
        );
      }
    };
    var callbackQueueExist = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such queue exist", status);
      else {
        mongoShared.checkTicketExist(
          callbackTicketExistCase,
          req.params.companyId,
          mongoConstants.collectionNameTicket,
          req.params.ticketId
        );
      }
    };
    var callbackModeratorCase = function(status, data) {
      if (status != 200) {
        response.sendResponse(
          res,
          "Unauthorised User or Invalid moderator",
          401
        );
      } else {
        mongoShared.checkQueueExist(
          callbackQueueExist,
          req.params.companyId,
          mongoConstants.collectionNameQueue,
          req.params.queueId
        );
      }
    };
    var callbackExistCase = function(status, data) {
      if (status != 200)
        response.sendResponse(res, "No such company exist", status);
      else {
        mongoShared.checkModeratorExists(
          callbackModeratorCase,
          req.params.companyId,
          mongoConstants.collectionNameModerator,
          req.params.authKey
        );
      }
    };
    mongoShared.checkCustomerExist(
      callbackExistCase,
      mongoConstants.globalDbName,
      mongoConstants.collectionNameCustomers,
      req.params.companyId
    );
  }
};

exports.getActiveTicket = function(req, res) {
  // get a ticket
  var callbackGetTicket = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "Error getting active ticket", status);
    else {
      response.sendResponse(res, data, 200);
    }
  };
  var callbackQueueExist = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such queue exist", status);
    else {
      mongoTicket.mongoDBTicketActiveGet(
        callbackGetTicket,
        req.params.companyId,
        mongoConstants.collectionNameTicket,
        req.params.authKey,
        req.params.queueId,
        mongoConstants.ticketStatusActive
      );
    }
  };
  var callbackModeratorCase = function(status, data) {
    if (status != 200) {
      response.sendResponse(res, "Unauthorised User or Invalid moderator", 401);
    } else {
      mongoShared.checkQueueExist(
        callbackQueueExist,
        req.params.companyId,
        mongoConstants.collectionNameQueue,
        req.params.queueId
      );
    }
  };
  var callbackExistCase = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such company exist", status);
    else {
      mongoShared.checkModeratorExists(
        callbackModeratorCase,
        req.params.companyId,
        mongoConstants.collectionNameModerator,
        req.params.authKey
      );
    }
  };
  mongoShared.checkCustomerExist(
    callbackExistCase,
    mongoConstants.globalDbName,
    mongoConstants.collectionNameCustomers,
    req.params.companyId
  );
};

exports.getWaitTicket = function(req, res) {
  var callbackGetTicket = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "Error getting waiting tickets", status);
    else {
      response.sendResponse(res, data, 200);
    }
  };
  var callbackQueueExist = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such queue exist", status);
    else {
      mongoTicket.mongoDBWaitGet(
        callbackGetTicket,
        req.params.companyId,
        mongoConstants.collectionNameTicket,
        req.params.queueId,
        mongoConstants.ticketStatusWait
      );
    }
  };
  var callbackModeratorCase = function(status, data) {
    if (status != 200) {
      response.sendResponse(res, "Unauthorised User or Invalid moderator", 401);
    } else {
      mongoShared.checkQueueExist(
        callbackQueueExist,
        req.params.companyId,
        mongoConstants.collectionNameQueue,
        req.params.queueId
      );
    }
  };
  var callbackExistCase = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such company exist", status);
    else {
      mongoShared.checkModeratorExists(
        callbackModeratorCase,
        req.params.companyId,
        mongoConstants.collectionNameModerator,
        req.params.authKey
      );
    }
  };
  mongoShared.checkCustomerExist(
    callbackExistCase,
    mongoConstants.globalDbName,
    mongoConstants.collectionNameCustomers,
    req.params.companyId
  );
};

exports.getUserRelatedQueueTicket = function(req, res) {
  var callbackGetQueueTicket = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "Error getting queue", status);
    else {
      response.sendResponse(res, data, 200);
    }
  };
  var callbackUserCase = function(status, data) {
    if (status != 200) {
      response.sendResponse(res, "Unauthorised User", 401);
    } else {
      mongoTicket.mongoDBUserRelatedQueueTicketGet(
        callbackGetQueueTicket,
        req.params.companyId,
        mongoConstants.collectionNameTicket,
        req.params.authKey
      );
    }
  };
  var callbackExistCase = function(status, data) {
    if (status != 200)
      response.sendResponse(res, "No such company exist", status);
    else {
      mongoShared.checkUserExists(
        callbackUserCase,
        req.params.companyId,
        mongoConstants.collectionNameModerator,
        req.params.authKey
      );
    }
  };
  mongoShared.checkCustomerExist(
    callbackExistCase,
    mongoConstants.globalDbName,
    mongoConstants.collectionNameCustomers,
    req.params.companyId
  );
};
