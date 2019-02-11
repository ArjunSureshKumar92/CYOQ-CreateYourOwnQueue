var queue = require('../classes/queue')
var mongo = require('../model/mongo')
var mongoConstants = require('../constants')


exports.start = function () {
// create a simple queue
    var myQueue1 = new queue();
    mongo.mongoDB(mongoConstants.dbName,mongoConstants.collectionNameCentennial,myQueue1,mongoConstants.dbActionTestInsertCommand,mongoConstants.collectioncolumn_id,mongoConstants.collectioncolumn_name)
}