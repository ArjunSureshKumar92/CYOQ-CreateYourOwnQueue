var queue = require('../classes/queue')
var mongo = require('../model/mongo')
var mongoConstants = require('../constants')


exports.start = function () {
// create a simple queue
    var myQueue1 = new queue;
    mongo.mongoDB(mongoConstants.dbName,mongoConstants.collectionNameCentennial,myQueue1,'Insert')
}