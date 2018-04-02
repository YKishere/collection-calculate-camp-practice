'use strict';
var even_group_calculate_average = function (collection) {
    var arr = [];
    var arra = [];
    var arrb = [];
    var arrc = [];
    for (var i in collection) {
        if (i % 2 == 0) {
            continue;
        } else {
            arr.push(collection[i]);
        }
    } console.log(arr);
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    for (var j in arr) {
        if (arr[j] % 2 == 0) {
            if (arr[j] < 10) {   // gewei
                arra.push(arr[j]);
                count1++;
            } else {
                if (arr[j] < 100) {  //shiwei
                    arrb.push(arr[j]);
                    count2++;
                } else {
                    arrc.push(arr[j]);   //baiwei
                    count3++;
                }
            }
        } else {
            continue;
        }
    }
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    for (var j in arra) {
        sum1 = sum1 + arra[j]
    }
    for (var k in arrb) {
        sum2 = sum2 + arrb[k]
    }
    for (var l in arrc) {
        sum3 = sum3 + arrc[l]
    }

    if (count1 + count2 + count3 == 0) {
        return [0];
    } else {
        if (count1 + count2 == 0) {
            return [sum3 / count3];
        } else {
            return [sum1 / count1, sum2 / count2, sum3 / count3];
        }
    }
};
module.exports = even_group_calculate_average;

