var mongo = require('mongodb').MongoClient;
var mongoConfig = require('../config/mongo');

let mongoConnection = null;

module.exports.connectMongo = () => new Promise((resolve, reject) => {
    mongo.connect(mongoConfig.connectionName,  { useNewUrlParser: true }, function(err, client) {
        if (err) { reject(err); process.exit(); return; };
        resolve(client);
        mongoConnection = client;
    });
});

module.exports.getDb = function () {
    if(!mongoConnection) {
        console.log('Call connect first!');
    } else {
        return mongoConnection;
    }
    
}

