exports.createQueueCan = function (value) {
    switch (value) {
        case 'name':
        case 'description':
        case 'startTime':
        case 'closeTime':
        case 'moderator':
            return true;
        default:
            return false;
    }
}

exports.createCompanyCan = function (value) {
    switch (value) {
        case 'name':
        case 'address':
        case 'phone':
        case 'website':
        case 'employeeCount':
            return true;
        default:
            return false;
    }
}

exports.createModeratorCan = function (value) {
    switch (value) {
        case 'name':
        case 'address':
        case 'phone':
            return true;
        default:
            return false;
    }
}

exports.createCompanyMust = function (value) {
    return (value.includes('name'));
}

exports.createModeratorMust = function (value) {
    return (value.includes('name') && value.includes('companyId'));
}

exports.createQueueMust = function (value) {
    return (value.includes('name') && value.includes('companyId'));
}

exports.getQueue = function (value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}


exports.updateQueue = function (value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}

exports.deleteQueue = function (value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}