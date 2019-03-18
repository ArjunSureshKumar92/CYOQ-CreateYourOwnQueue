var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.updateCompany = function (req, res) {
    // update company
    if (apiControl.updateCompanyMust(Object.keys(req.body))) {
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
        mongoCompany.mongoDBCompanyUpdate(callback, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers,updCompanyObj, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }

}


function getValue(val) {
    if (val == undefined || val == null) {
        return false;
    }
    return true;
}


