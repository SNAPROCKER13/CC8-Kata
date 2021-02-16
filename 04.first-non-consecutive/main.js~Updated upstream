/**
 * @param { Array<number> } nums
 * @return { number | null }
 */
function findFirstNonConsecutive(nums) {
    let i;
    let conNum = 0;
    let n = nums[0];
    if (nums.length <= 1) {
        return null;
    }
    else {
        for (i = 0; i < nums.length; i++) {
            if (nums[i] != n) {
                conNum = nums[i];
                break;
            }
            n++;
        }
        return conNum;
    }

}

module.exports = findFirstNonConsecutive
