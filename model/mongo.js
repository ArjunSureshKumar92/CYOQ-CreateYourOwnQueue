// Setting up mongo db connections

var mongo = require('mongodb').MongoClient;
var mongoConfig = require('../config/mongo');

let mongoMainConnection = null;
let mongoCustomerConnection = null;

module.exports.connectMongo = () => new Promise((resolve, reject) => {
    mongo.connect(mongoConfig.connectionNameMain,{ useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
        if (err) { reject(err); process.exit(); return; };
        resolve(client);
        mongoMainConnection = client;

        mongo.connect(mongoConfig.connectionNameCustomer,{ useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
            if (err) { reject(err); process.exit(); return; };
            resolve(client);
            mongoCustomerConnection = client;
        });
    });

    
});


module.exports.getCustomerDb = function () {
    if(!mongoCustomerConnection) {
        console.log('Call connect first!');
    } else {
        return mongoCustomerConnection;
    }
    
}


module.exports.getMainDb = function () {
    if(!mongoMainConnection) {
        console.log('Call connect first!');
    } else {
        return mongoMainConnection;
    }
    
}