/**
 * @param { number | string } thing
 * @return {boolean}
 */
function isPalindrome(thing) {
    if (typeof(thing) === "string") {

        let res = thing.split("");
        let sumString = "";
        // const reverseArr = []

        for (let i = res.length - 1; i >= 0; i--) {
            // reverseArr.push(res[i])

            sumString += res[i];

        }

        if (sumString === thing) {
            return true;
        }
        else {
            return false;
        }
    }

    else if (typeof (thing) === "number") {

        let numString;
        let num = 0;
        numString = thing.toString();
        let res = numString.split("");
        let sumString = "";
        // const reverseArr = []

        for (let i = res.length - 1; i >= 0; i--) {
            // reverseArr.push(res[i])

            sumString += res[i];

        }

        num = +sumString;

        if (num === thing) {
            return true;
        }
        else {
            return false;
        }

    }
}

isPalindrome(11011);

module.exports = isPalindrome
