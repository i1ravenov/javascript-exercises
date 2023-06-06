const sumAll = function(left, right) {
    if (!Number.isInteger(left) || !Number.isInteger(right) 
        || left < 0 || right < 0) {
            return "ERROR";
        }
    if (left > right) {
        const temp = left;
        left = right;
        right = temp;
    }
    let res = 0;
    for (let i = left; i <= right; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
