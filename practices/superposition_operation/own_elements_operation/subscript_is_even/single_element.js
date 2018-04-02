'use strict';
var single_element = function (collection) {
    var arr = [];
    for (var i in collection) {
        if (i % 2 == 0) {
            continue;
        } else {
            arr.push(collection[i])
        }
    }
        var result = [];        //找出重复元素
        arr.forEach(function (item) {
            if (arr.indexOf(item) != arr.lastIndexOf(item) && result.indexOf(item) == -1)
                result.push(item);
        })
        var arr2=[];        //取出非重复元素
        for (var k in arr) {
            for (var l in result) {
                if (arr[k] == result[l]) {
                    continue;
                }else{
                    arr2.push(arr[k])
                }
            }
        }
        return arr2;
}
module.exports = single_element;
   

