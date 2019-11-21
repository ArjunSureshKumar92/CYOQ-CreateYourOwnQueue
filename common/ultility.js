// Common utility functions required

exports.isTimeWithinRange = function (lowerLimit, upperLimit, value) {
    console.log(value)
    console.log(parseInt(lowerLimit, 10))
    console.log(parseInt(upperLimit, 10))
    if (parseInt(lowerLimit, 10) <= value && parseInt(upperLimit, 10) >= value)
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