var random = require('../common/random')
var response = require('../common/response')
var mongoCompany = require('../model/company')
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
        var callback = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error inserting company', status)
            else {
                mail.sendMail('comp231team4@gmail.com',data.email,'New Company Created','Hey Admin, \n This is the link to the company dashboard => http://localhost:4200/admin/'+data.email+'/'+data.companyId,'comp231password');
                response.sendResponse(res, 'Success, ID => ' + data.companyId, 200)

            }
        }
        mongoCompany.mongoDBCompanyInsert(callback, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, createCompanyObj);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}



