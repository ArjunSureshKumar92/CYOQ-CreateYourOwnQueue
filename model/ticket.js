// All the mongo db CRUD operations for tickets

const mongodb = require('../model/mongo');
const constants = require('../constants')
exports.mongoDBTicketInsert = function (callback, dbName, collectionName, obj) {
    db = mongodb.getCustomerDb();
    db.db(dbName).collection(collectionName).insertOne(obj, (err, result) => {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            callback(200, result.ops[0])
        }
        //db.close(); using global connection string.
    })
}


exports.mongoDBTicketGetPosition = function (callback, dbName, collectionName, queueId, ticketId) {
    db = mongodb.getCustomerDb();
    var obj = { ticketId: ticketId, queueId: queueId };

    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            if (result.status == constants.ticketStatusDone) {
                callback(200, -1);
            } else if (result.status == constants.ticketStatusCancel) {
                callback(422, "");
            }
            else {
                console.log(result._id)
                var obj2 = { _id: { $lte: result._id }, status: constants.ticketStatusWait, queueId: queueId }
                db.db(dbName).collection(collectionName).find(obj2).toArray(function (err2, result2) {
                    if (err2) {
                        console.log(err2);
                        callback(500, result2);
                    } else if (result2) {
                        console.log("count =>" + result2.length)
                        callback(200, result2.length);
                    } else {
                        console.log(result2);
                        callback(422, result2);
                    }
                });
            }
        } else {
            console.log(result);
            callback(422, result);
        }
    });

}


exports.mongoDBWaitGetNext = function (callback, dbName, collectionName,queueId,status) {
    db = mongodb.getCustomerDb();
    var obj = { status: status,queueId:queueId };
    db.db(dbName).collection(collectionName).find(obj).limit(1).toArray(function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            if (result.length > 0)
                callback(200, result[0]);
            else
                callback(422, result);
        } else {
            console.log(result);
            callback(422, result);
        }
    });
}

exports.mongoDBWaitGet = function (callback, dbName, collectionName,queueId,status) {
    db = mongodb.getCustomerDb();
    var obj = { status: status,queueId:queueId };
    db.db(dbName).collection(collectionName).find(obj).toArray(function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            if (result.length > 0)
                callback(200, result);
            else
                callback(422, result);
        } else {
            console.log(result);
            callback(422, result);
        }
    });
}

exports.mongoDBTicketActiveGet = function (callback, dbName, collectionName, moderatorId,queueId,status) {
    db = mongodb.getCustomerDb();
    var obj = { status: status, servedBy: moderatorId, queueId:queueId };
    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            callback(200, result);
        } else {
            console.log(result);
            callback(422, result);
        }
    });

}

exports.mongoDBTicketGet = function (callback, dbName, collectionName, queueId,ticketId) {
    db = mongodb.getCustomerDb();
    var obj = { ticketId: ticketId, queueId:queueId };
    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            callback(200, result);
        } else {
            console.log(result);
            callback(422, result);
        }
    });

}

exports.mongoDBTicketDelete = function (callback, dbName, collectionName, ticketId,status) {
    db = mongodb.getCustomerDb();
    db.db(dbName).collection(collectionName).findOneAndUpdate({ "ticketId" : ticketId }, { $set: {"status" : status} }, function (err, result) {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            // start sync to send mails to next in line
            callback(200, result.value)
        }
    });

}



exports.mongoDBTicketNext = function (callback, dbName, collectionName,ticketId,obj) {
    db = mongodb.getCustomerDb();
    db.db(dbName).collection(collectionName).findOneAndUpdate({ "ticketId" : ticketId }, { $set: obj }, function (err, result) {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            // start sync to send mails to next in line
            callback(200, result.value)
        }
    });

}

exports.mongoDBTicketClose = function (callback, dbName, collectionName, ticketId,obj) {
    db = mongodb.getCustomerDb();
    db.db(dbName).collection(collectionName).findOneAndUpdate({ "ticketId" : ticketId , "status" : constants.ticketStatusActive }, { $set: obj }, function (err, result) {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            // start sync to send mails to next in line
            callback(200, result.value)
        }
    });

}

exports.mongoDBUserRelatedQueueTicketGet = function (callback, dbName, collectionName, userId) {
    db = mongodb.getCustomerDb();
    var obj = { email:userId };
    db.db(dbName).collection(collectionName).find(obj).toArray(function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            if (result.length > 0)
                callback(200, result);
            else
                callback(422, result);
        } else {
            callback(422, result);
        }
    });

}




