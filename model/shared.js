const mongodb = require('../model/mongo');
exports.checkCustomerExist = function (callback, dbName, collectionName, companyId) {
    db = mongodb.getDb();
    var obj = {};
    obj.companyId = companyId;
    db.db(dbName).collection(collectionName).findOne(obj, function (err, result) {
        if (err) {
            callback(500, result);
        } else if (result) {
            callback(200, result);
        } else {
            callback(422, result);
        }
    });
}

exports.checkModeratorExist = function (callback, dbName, collectionName, moderators) {
    db = mongodb.getDb();
    if (moderators) {
        var moderator = [];
        db.db(dbName).collection(collectionName).find().forEach(function (result) {
            if (result != null) {
                moderator.push(result.moderatorId);
            }
        }, function (err) {
            if (Array.isArray(moderators)) {
                for (var i = 0; i < moderators.length; i++) {
                    if (moderator.includes(moderators[i])) {
                        continue;
                    } else {
                        console.log('invalid');
                        callback(300, '');
                        return;
                    }
                }
                callback(200, '');
            } else {
                if (moderator.includes(moderators)) {
                    callback(200, '');
                } else {
                    console.log('invalid');
                    callback(300, '');
                    return;
                }
            }



        });

    } else {
        callback(200, '');
    }

}