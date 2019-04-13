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

exports.createTicketCan = function (value) {
    switch (value) {
        case 'description':
        case 'email':
        case 'queueId':
            return true;
        default:
            return false;
    }
}

exports.updateQueueCan = function (value) {
    switch (value) {
        case 'name':
        case 'description':
        case 'startTime':
        case 'status':
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
        case 'email':
        case 'phone':
        case 'website':
        case 'employeeCount':
            return true;
        default:
            return false;
    }
}

exports.updateCompanyCan = function (value) {
    switch (value) {
        case 'name':
        case 'address':
        case 'email':
        case 'phone':
        case 'website':
        case 'employeeCount':
            return true;
        default:
            return false;
    }
}

exports.closeTicketCan = function (value) {
    switch (value) {
        case 'ticketId':
        case 'feedback':
            return true;
        default:
            return false;
    }
}

exports.nextTicketCan = function (value) {
    switch (value) {
        case 'queueId':
            return true;
        default:
            return false;
    }
}



exports.createModeratorCan = function (value) {
    switch (value) {
        case 'name':
        case 'email':
        case 'address':
        case 'phone':
            return true;
        default:
            return false;
    }
}

exports.updateModeratorCan = function (value) {
    switch (value) {
        case 'name':
        case 'address':
        case 'email':
        case 'phone':
            return true;
        default:
            return false;
    }
}

exports.createCompanyMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('name') && keys.includes('email') && !values.includes(''));
}

exports.updateCompanyMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('companyId')  && !values.includes(''));
}

exports.createModeratorMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('name') && keys.includes('companyId') && keys.includes('email') && !values.includes(''));
}

exports.updateModeratorMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('moderatorId') && !values.includes(''));
}

exports.createQueueMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('name') && keys.includes('companyId') && keys.includes('moderator') && !values.includes(''));
}

exports.createTicketMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('queueId') && keys.includes('companyId') && keys.includes('email') && !values.includes(''));
}

exports.getQueueMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('queueId') && keys.includes('companyId') && !values.includes(''));
}
exports.closeTicketMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('companyId') && keys.includes('ticketId') && !values.includes(''));
}

exports.getModeratorMust = function (value) {
    return (value.includes('moderatorId') && value.includes('companyId'));
}

exports.getAllModeratorMust = function (value) {
    return (value.includes('companyId'));
}

exports.nextTicketMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('companyId') && keys.includes('queueId') && !values.includes(''));
}

exports.updateQueueMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('queueId') && keys.includes('companyId') && !values.includes(''));
}

exports.deleteQueueMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('queueId') && keys.includes('companyId') && !values.includes(''));
}

exports.deleteCompanyMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('companyId')  && !values.includes(''));
}

exports.deleteModeratorMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('moderatorId') && keys.includes('companyId') && !values.includes(''));
}

exports.deleteTicketMust = function (keys, values) {
    values = values.map(function (val) {
        if (Array.isArray(val)) {
            val = val.map(function (v) {
               return v.trim()
            });
            return val
        } else {
            return val.trim()
        }
    });
    return (keys.includes('companyId') && keys.includes('ticketId') && !values.includes(''));
}

