const mongodb = require('../model/mongo');
const constants = require('../constants')
exports.mongoDBTicketInsert = function (callback, dbName, collectionName, obj) {
    db = mongodb.getDb();
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
    db = mongodb.getDb();
    var obj = { ticketId: ticketId, queueId: queueId };

    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            if (result.status == constants.ticketStatusDone) {
                callback(200, -1);
            }
            else {
                console.log(result._id)
                var obj2 = { _id: { $lte: result._id }, status: constants.ticketStatusWait }
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


exports.mongoDBTicketGet = function (callback, dbName, collectionName, queueId, ticketId) {
    db = mongodb.getDb();
    var obj = { ticketId: ticketId, queueId: queueId };
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