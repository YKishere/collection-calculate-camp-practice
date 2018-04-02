'use strict';
var calculate_median = function (collection) {
    var x = 0;
    var count = 0;
    var arr = [];
    for (var i in collection) {
        if (i % 2 == 0) {
            continue;
        } else {
            if (collection[i] % 2 == 0) {
                arr.push(collection[i]);
                count++;
            } else {
                continue;
            }
        }
    }
    for (var i in arr) {
        if (arr.length % 2 == 0) {
            return (arr[count / 2] + arr[count / 2 - 1]) / 2
        } else {
            return arr[(count - 1) / 2];
        }
    }
};
module.exports = calculate_median;
