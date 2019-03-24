var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
var mongoConstants = require('../constants')
var apiControl = require('./api')



exports.createCompanyUI = function (req, res) {
    console.log("Inside createCompanyUI")
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('createCompany', {
        success: '',
        error: '',
    });
}


exports.createCompany = function (req, res) {
    // create a simple queue
    if (apiControl.createCompanyMust(Object.keys(req.body))) {
        var createCompanyObj = {};
        createCompanyObj['companyId'] = '824187727'//random.getRandom(8);
        createCompanyObj['createdDate'] = new Date(new Date().toUTCString())
        createCompanyObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.createCompanyCan(key))
                createCompanyObj[key] = req.body[key];
        }
        var callback = function (status, data) {
            if (status != 200)
                //response.sendResponse(res, 'Error inserting company', status)
                res.render('createCompany', {
                    success: '',
                    error: 'Error inserting company',
                });
            else {
                //response.sendResponse(res, 'Success, ID => ' + data.companyId, 200)
                res.render('createCompany', {
                    success: 'Successfully added company => '+data.companyId,
                    error: '',
                });
            }
        }
        mongoCompany.mongoDBCompanyInsert(callback, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers,createCompanyObj);
    } else {
        //response.sendResponse(res, 'Bad Request', 403);
        res.render('createCompany', {
            success: 'Bad Request',
            error: '',
        });
    }

}


function getValue(val) {
    if (val == undefined || val == null) {
        return false;
    }
    return true;
}


