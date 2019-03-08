var mongoConfig = require('../config/mongo')

const mongo = require('mongodb').MongoClient
exports.mongoDB = function (callback,dbName,collectionName,action,obj) {

    function insertNewQueue(collection,client,obj) {
        collection.insertOne(obj, (err, result) => {
            var response;
            if (err) {
                console.error(err)
                callback(422,err)
            }
            else {
                console.log(result);
                callback(200,result.ops[0])
            }
            client.close();
          })
    }

    mongo.connect(mongoConfig.connectionName, { useNewUrlParser: true }, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const collection = client.db(dbName).collection(collectionName)
        switch(action) {
            case 'InsertQueue': 
            return insertNewQueue(collection,client,obj);
        }
        
      })
   
}