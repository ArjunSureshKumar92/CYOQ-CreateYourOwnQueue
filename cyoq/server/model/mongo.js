var mongoConfig = require('../config/mongo')
var mongoConstants = require('../constants').collectioncolumn_name

const mongo = require('mongodb').MongoClient
exports.mongoDB = function (dbName,collectionName,queueObj,action) {

    function insert(collection,id,name) {
        collection.insertOne({name: queueObj.name,id: queueObj.id}, (err, result) => {
            console.log('Success Inserted Value')
        })
    }

    mongo.connect(mongoConfig.connectionName, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        switch(action) {
            case 'Insert': 
            insert(collection)
            break
        }
        
      })
   
}