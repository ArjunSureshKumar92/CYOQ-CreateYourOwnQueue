var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.deleteCompany = function (req, res) {
    // delete a company
    if (apiControl.deleteCompanyMust(Object.keys(req.body),Object.values(req.body))) {
        var callbackDeleteCompany = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting company', status)
            else {
                response.sendResponse(res, 'Success, deleted Company ID => ' + req.body.companyId, 200)
            }
        }
        mongoCompany.mongoDBCompanyDelete(callbackDeleteCompany, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


