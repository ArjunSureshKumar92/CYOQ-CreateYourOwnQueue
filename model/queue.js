const mongodb = require('../model/mongo');
exports.mongoDBQueueInsert = function (callback, dbName, collectionName, obj) {
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