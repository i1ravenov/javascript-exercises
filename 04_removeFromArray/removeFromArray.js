const removeFromArray = function(arr, ...entriesToRemove) {
    
    for (entry of entriesToRemove) {
        if (arr.includes(entry)) {
            arr = removeSingle(arr, entry);
        }
    }
    return arr;
};

function removeSingle(arr, entry) {
    const res = [];
    for (e of arr) {
        if (e === entry) {
            continue;
        } else {
            res.push(e);
        }
    }
    return res;
}

// Do not edit below this line
module.exports = removeFromArray;
