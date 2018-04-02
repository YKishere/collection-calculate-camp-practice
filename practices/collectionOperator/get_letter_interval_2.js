'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az', 'ba'];
  function getArr(arr) {
    var arr2 = [];
    if (number_a < number_b) {
      var x = number_a - 2;
      for (var i in arr) {
        x = x + 1;
        arr2.push(arr[x]);
        if (x > number_b - 2) {
          break
        }
      }
      arr = arr2;
      return (arr)
    } else {
      if (number_a > number_b) {
        var x = number_a;
        for (var i in arr) {
          x = x - 1;
          arr2.push(arr[x])
          if (x < number_b) {
            break
          }
        }
        arr = arr2;
        return (arr)
      } else {
        var x = number_a - 1;
        for (var i in arr) {
          arr2.push(arr[x])
          break
        }
        arr = arr2;
        return (arr)
      }
    }

  }
  return getArr(arr);
}


module.exports = get_letter_interval;

