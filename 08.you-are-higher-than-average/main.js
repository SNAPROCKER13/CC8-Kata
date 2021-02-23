/**
 * @param { Array<number> }classScores
 * @param { number } yourScore
 * @return { boolean }
 */
function isHigherThanAverage(classScores, yourScore) {

    let i;
    let sum = 0;
    let n = 0;
    let avg = 0;

    for (i = 0; i <= classScores.length-1; i++) {
        sum += classScores[i];
        n++;
    }

    avg = sum / n;

    if (avg < yourScore) {
        return true
    }
    else {
        return false
    }
}


module.exports = isHigherThanAverage
