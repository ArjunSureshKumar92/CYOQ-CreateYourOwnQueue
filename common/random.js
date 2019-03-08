exports.getRandom = function(rand) {
    min = Math.ceil(Math.pow(10,rand));
    max = (9*Math.floor(Math.pow(10,rand)));
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}