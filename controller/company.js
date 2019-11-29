var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


// api to create a company
exports.createCompany = function (req, res) {
    // create a simple company
    if (apiControl.createCompanyMust(Object.keys(req.body),Object.values(req.body))) {
        var createCompanyObj = {};
        createCompanyObj['companyId'] = random.getRandom(8);
        createCompanyObj['createdDate'] = new Date(new Date().toUTCString())
        createCompanyObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.createCompanyCan(key))
                createCompanyObj[key] = req.body[key];
        }
        // the callback funtion which is called after mongo db call
        var callback = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting company', status)
            else {
                // function to send an email
                mail.sendMail(mongoConstants.mailingEmail,data.email,'New Company Created','Hey Admin, \n This is the link to the company dashboard => '+mongoConstants.baseUrl,mongoConstants.mailingPassword);
                response.sendResponse(res, 'Success, ID => ' + data.companyId, 200)
            }
        }
        // Function to insert company details to mongo
        mongoCompany.mongoDBCompanyInsert(callback, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, createCompanyObj);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.updateCompany = function (req, res) {
    // update company
    if (apiControl.updateCompanyMust(Object.keys(req.body),Object.values(req.body))) {
        var updCompanyObj = {};
        updCompanyObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.updateCompanyCan(key))
            updCompanyObj[key] = req.body[key];
        }
        var callback = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error updating company', status)
            else {
                response.sendResponse(res, 'Success, ID => ' + req.body.companyId, 200)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey)
                mongoCompany.mongoDBCompanyUpdate(callback, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers,updCompanyObj, req.body.companyId);
                    
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}

exports.deleteCompany = function (req, res) {
    // delete a company
    if (apiControl.deleteCompanyMust(Object.keys(req.body), Object.values(req.body))) {
        var callbackDeleteCompany = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting company', status)
            else {
                response.sendResponse(res, 'Success, deleted Company ID => ' + req.body.companyId, 200)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey) {
                   mongoCompany.mongoDBCompanyDelete(callbackDeleteCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
                } else {
                    response.sendResponse(res, 'Unauthorised User', 401)
                }
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
        
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

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
