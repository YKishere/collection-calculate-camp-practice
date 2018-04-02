'use strict';
var even_asc_odd_desc = function (collection) {
    var arr = [];
    var arr1 = [];
    for (var i in collection) {
        if (collection[i] % 2 == 0) {
            arr.push(collection[i])
        } else {
            arr1.push(collection[i])
        }
    }
    function sortNumber(a, b) {
        return a - b
    }
    arr = arr.sort(sortNumber);
    function sort1Number(c, d) {
        return d - c
    }
    arr1 = arr1.sort(sort1Number);
        for (var k in arr1) {
            arr.push(arr1[k]);
        }
        return arr;
    
};
module.exports = even_asc_odd_desc;
