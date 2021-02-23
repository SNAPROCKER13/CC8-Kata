/**
 * @param { number } hours
 * @param { number }  minutes
 * @param { number }  seconds
 * @return { number }
 */
function convertToMilliseconds(hours, minutes, seconds) {
    let milliseconds;

    hours = hours*60*60*1000;
    minutes = minutes*60*1000;
    seconds = seconds*1000;
    milliseconds = hours + minutes + seconds;
    
   return milliseconds;

}

module.exports = convertToMilliseconds
