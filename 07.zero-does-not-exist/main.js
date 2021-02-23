/**
 * @param { number } num
 * @return { number | null }
 */
function zeroDoesNotExist(num) {

    let numArr = num.toString().split("");
    let sum0 = 1;
    let sumArr = "";
    let result
    if (numArr.length > 1) {
        for (let i = numArr.length - 1; i >= 0; i--) {


            if (numArr[i] == 0) {

                sum0 = sum0 * 10; //1000000
            }
            else if (numArr[i] != 0) {

                break;
            }

        }
        for (let i = 0; i <= numArr.length - 1; i++) {

            sumArr = sumArr + numArr[i];
        }

        result = +sumArr / sum0;

        return result;
    }
    else{
        return null;
    }
}


zeroDoesNotExist(19200000)

module.exports = zeroDoesNotExist
