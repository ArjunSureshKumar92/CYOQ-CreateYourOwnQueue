exports.getRandom = function(rand) {
    min = Math.ceil(Math.pow(10,rand));
    max = (9*Math.floor(Math.pow(10,rand)));
    var val = Math.floor(Math.random() * (max - min)) + min;
    return ''+val;
}