const fibonacci = function(n) {
    n = +n;
    if (n <= 0) return "OOPS";
    if (n <= 2) return 1;
    let a1 = 1;
    let a2 = 1;
    for (let i = 2; i < n; i++) {
        let temp = a2;
        a2 = a1 + a2;
        a1 = temp;
    }
    return a2;
};

// Do not edit below this line
module.exports = fibonacci;
