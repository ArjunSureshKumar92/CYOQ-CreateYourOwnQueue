const mongodb = require('../model/mongo');
exports.mongoDBModeratorInsert = function (callback, dbName, collectionName, obj) {
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


exports.checkCustomerExist = function (callback, dbName, collectionName, companyId) {
    db = mongodb.getDb();
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