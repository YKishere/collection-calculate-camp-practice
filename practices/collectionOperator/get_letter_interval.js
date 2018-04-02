'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e'];
  function getArr(arr) {
    var arr2 = [];
    if (number_a < number_b) {
      return (arr)
    } else {
      if (number_a > number_b) {
        var x = number_a;
        for (var i in arr) {
          x = x - 1;
          arr2.push(arr[x])
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
