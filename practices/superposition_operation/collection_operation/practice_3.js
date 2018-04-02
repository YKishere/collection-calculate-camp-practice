'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var y = 0;
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      continue;
    } else {
      collection[i] = collection[i] * 3 + 5
      y = y + collection[i];
    }
  }
  return y;
}

module.exports = hybrid_operation_to_uneven;

