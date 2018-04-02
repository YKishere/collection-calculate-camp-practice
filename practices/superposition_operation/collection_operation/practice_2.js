'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      continue
    } else {
      collection[i] = collection[i] * 3 + 2
      arr.push(collection[i])
    }
  }
  return arr;
}

module.exports = hybrid_operation_to_uneven;

