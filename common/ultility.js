exports.isTimeWithinRange = function (lowerLimit, upperLimit, value) {
    console.log(value)
    console.log(lowerLimit)
    console.log(upperLimit)
    if (lowerLimit <= value && upperLimit >= value)
        return true
    return false
}


exports.minutesToHourString = function (start, current) {
    console.log(start)
    console.log(current)
    if (start < current) {
        console.log('less')
        current = 1440 -  parseInt(current, 10) +  parseInt(start, 10)
    }
    
    else
        current = start - current
        console.log(current)
    hour = Math.floor(current / 60);
    minute = current % 60;
    return '' + hour + ' hour(s) and ' + minute + ' minute(s)'
}