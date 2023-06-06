const repeatString = function (str, num) {
    if (num < 0) {
        return "ERROR";
    }
    const res = [];
    for (let i = 0; i < num; i++) {
        res.push(str);
    }
    return res.join('');
};

// Do not edit below this line
module.exports = repeatString;
