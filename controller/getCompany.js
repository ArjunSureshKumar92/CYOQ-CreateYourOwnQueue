var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')



exports.getAllCompany = function (req, res) {
    // get all company
    var callbackGetAllCompany = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting companies', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    mongoCompany.mongoDBCompanyGetAll(callbackGetAllCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers);
}

exports.getCompany = function (req, res) {
    // get all company
    var callbackGetCompany = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exists', status)
        else {
            if (data.email == req.params.authKey)
                response.sendResponse(res, data, 200)
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    mongoCompany.mongoDBCompanyGet(callbackGetCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
}



