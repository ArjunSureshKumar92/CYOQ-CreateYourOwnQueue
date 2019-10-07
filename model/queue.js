// All the mongo db CRUD operations for queues

const mongodb = require('../model/mongo');
exports.mongoDBQueueInsert = function (callback, dbName, collectionName, obj) {
    var index = {"name": "text" }
    db = mongodb.getDb();
    db.db(dbName).collection(collectionName).insertOne(obj, (err, result) => {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            db.db(dbName).collection(collectionName).createIndex(index)
            callback(200, result.ops[0])
        }
        //db.close(); using global connection string.
    })

}

exports.mongoDBQueueUpdate = function (callback, dbName, collectionName, obj, queueId) {
    db = mongodb.getDb();
    var queue = { queueId: queueId };
    //var tmp = {$set:{ name: "success-advisor-queue1" }};
    //console.log(queue.queueId + ' - '+tmp.name);
    db.db(dbName).collection(collectionName).findOneAndUpdate(queue, { $set: obj }, (err, result) => {
        if (err) {
            console.error(err)
            callback(422, err)
        }
        else {
            callback(200, result)
        }
        //db.close(); using global connection string.
    })

}

exports.mongoDBQueueGet = function (callback, dbName, collectionName, queueId) {
    db = mongodb.getDb();
    var obj = { queueId: queueId };
    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            callback(200, result);
        } else {
            callback(422, result);
        }
    });

}

exports.mongoDBModeratorRelatedQueueGet = function (callback, dbName, collectionName, moderatorId) {
    db = mongodb.getDb();
    var obj = { moderator: { $in: [moderatorId] } };
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



exports.mongoDBQueueGetAllWithSearch = function (callback, dbName, collectionName,search) {
    db = mongodb.getDb();
    var obj = { $text : {$search : search}}
    console.log(obj)
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

exports.mongoDBQueueGetAll = function (callback, dbName, collectionName) {
    db = mongodb.getDb();
    db.db(dbName).collection(collectionName).find({}).toArray(function (err, result) {
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





exports.mongoDBQueueDelete = function (callback, dbName, collectionName, queueId) {
    db = mongodb.getDb();
    var obj = { queueId: queueId };
    db.db(dbName).collection(collectionName).deleteOne(obj, function (err, result) {
        if (err) {
            callback(403, '');
        } else {
            if (result.deletedCount == 0)
                callback(300, '');
            else
                callback(200, '');
        }
    });

}