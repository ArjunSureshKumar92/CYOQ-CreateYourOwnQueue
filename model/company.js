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