const mongodb = require('../model/mongo');
exports.mongoDBCompanyInsert = function (callback,dbName,collectionName,obj) {
    db = mongodb.getDb();
    db.db(dbName).collection(collectionName).insertOne(obj, (err, result) => {
        var response;
        if (err) {
            console.error(err)
            callback(422,err)
        }
        else {
            callback(200,result.ops[0])
        }
        //db.close(); using global connection string.
      })    

}

exports.mongoDBCompanyUpdate = function (callback,dbName,collectionName,obj, companyId) {
    db = mongodb.getDb();
    var cmpId = { companyId: companyId };
    db.db(dbName).collection(collectionName).findOneAndUpdate(cmpId, {$set: obj}, (err, result) => {
        var response;
        if (err) {
            console.error(err)
            callback(422,err)
        }
        else {
            callback(200,result)
        }
        //db.close(); using global connection string.
      })    

}

exports.mongoDBCompanyDelete = function (callback, dbName, collectionName, companyId) {
    db = mongodb.getDb();
    var obj = { companyId: companyId };
    db.db(dbName).collection(collectionName).deleteOne(obj, function (err, result) {
        if (err) {
            callback(403, '');
        } else {
            if (result.deletedCount == 0)
                callback(300, '');
            else
                deleteCustomerDB(callback,companyId);
                //callback(200, '');
        }
    });

}

exports.mongoDBCompanyGetAll = function (callback, dbName, collectionName) {
    db = mongodb.getDb();
    db.db(dbName).collection(collectionName).find({}).toArray(function(err, result) {
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

function deleteCustomerDB(callback,dbName) {
    db = mongodb.getDb();
    db.db(dbName).dropDatabase(function(err, result){
        if (err) {
            callback(403, '');
        } else {
            if (result.deletedCount == 0)
                callback(200, '');
            else
                callback(200, '');
        }
    });
}