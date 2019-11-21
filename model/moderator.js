// All the mongo db CRUD operations for moderators

const mongodb = require('../model/mongo');
exports.mongoDBModeratorInsert = function (callback, dbName, collectionName, obj) {
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

exports.mongoDBModeratorUpdate = function (callback, dbName, collectionName, obj, modId) {
    db = mongodb.getCustomerDb();
    var moderatorId = { moderatorId: modId };
    db.db(dbName).collection(collectionName).findOneAndUpdate(moderatorId, { $set: obj }, (err, result) => {
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

exports.mongoDBModeratorDelete = function (callback, dbName, collectionName, queueCollectionName, moderatorId) {
    db = mongodb.getCustomerDb();
    var obj = { moderatorId: moderatorId };
    db.db(dbName).collection(collectionName).deleteOne(obj, function (err, result) {
        if (err) {
            callback(403, '');
        } else {
            if (result.deletedCount == 0)
                callback(300, '');
            else
                 deleteQueueModerator(callback, dbName,queueCollectionName, moderatorId);
            //callback(200, '');
        }
    });

}

exports.mongoDBModeratorGet = function (callback, dbName, collectionName, moderatorId) {
    db = mongodb.getCustomerDb();
    var obj = { moderatorId: moderatorId };
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

exports.mongoDBModeratorGetAll = function (callback, dbName, collectionName) {
    db = mongodb.getCustomerDb();
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
            console.log(result);
            callback(422, result);
        }
    });

}


function deleteQueueModerator(callback,dbName,collectionName, moderatorId) {
    //var obj = { moderator: { $in: [moderatorId] } };
    var obj =  { $pull: { moderator:  moderatorId } }
    db.db(dbName).collection(collectionName).updateMany({},obj,{multi: true}, function(err, result) {
        if (err) {
            console.log(err);
            callback(500, result);
        } else if (result) {
            console.log(result);
            db.db(dbName).collection(collectionName).updateMany({moderator: []},{$unset: {moderator:1}},{multi: true}, function(err2, result2) {
                if (err2) {
                    console.log(err2);
                    callback(500, result2);
                } else {
                    console.log(result2);
                    callback(200, result2);
                }
            });
        } else {
            console.log(result);
            callback(422, result);
        }
    });
}

exports.checkCustomerExist = function (callback, dbName, collectionName, companyId) {
    db = mongodb.getCustomerDb();
    var obj = {};
    obj.companyId = companyId;
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