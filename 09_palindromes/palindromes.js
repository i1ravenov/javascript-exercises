const palindromes = function (str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        while (punctuation.includes(str[left])) left++;
        while (punctuation.includes(str[right])) right--;
        if (str[left++] != str[right--]) {
            return false;
        }
    }
    return true;
};

const punctuation = "!:;,.? ";

// Do not edit below this line
module.exports = palindromes;
