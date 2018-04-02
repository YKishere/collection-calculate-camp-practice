'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var arrb = [];
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      for (var j in arr) {
        if (collection[i] == j) {
          arrb.push(arr[j-1]);
        }
      }
    } else {
      continue;
    }

  }
  return arrb;
}

module.exports = even_to_letter;
