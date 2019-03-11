exports.createQueue = function(value) {
    switch (value) {
        case 'queueName':
        case 'queueType':
        case 'queueConsumer':
        case 'queueProducer':
            return true;
        default:
            return false;
    }
}

exports.getQueue = function(value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}


exports.updateQueue = function(value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}

exports.deleteQueue = function(value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}