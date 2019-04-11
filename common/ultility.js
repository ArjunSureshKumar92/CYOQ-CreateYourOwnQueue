exports.isTimeWithinRange = function (lowerLimit, upperLimit, value) {
    console.log(value)
    console.log(lowerLimit)
    console.log(upperLimit)
    if (lowerLimit <= value && upperLimit >= value)
        return true
    return false
}


exports.minutesToHourString = function (value) {
    hour = Math.floor(value/60);
    minute = value%60;
    return ''+hour+' hour(s) and '+minute+' minute(s)'
}