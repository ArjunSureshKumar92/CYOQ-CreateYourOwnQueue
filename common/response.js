exports.sendResponse = function(res,data,status) {
    var responseToJson = {};
    responseToJson.response = data;
    res.status(status);
    res.json(responseToJson);
}



