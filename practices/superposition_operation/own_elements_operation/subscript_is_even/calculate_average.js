'use strict';
var calculate_average = function (collection) {
    var x = 0;
    var count = 0;
    for (var i in collection) {
        if (i % 2 == 0) {
            continue;
        } else {
            x = x + collection[i];
            count++;
        }
    }
    return x / count;
};
var collection_a = [1, 2, 3, 4, 5, 6];
calculate_average(collection_a);
module.exports = calculate_average;
