'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  for (var i in collection_a) {
    for (var j in collection_b) {
      if (collection_a[i] % collection_b[j] == 0) {
        arr.push(collection_a[i])
      }
    }
  }
  return arr;
}


module.exports = choose_divisible_integer;
