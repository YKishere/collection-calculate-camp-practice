'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var x = 0;
  for (var i in collection) {
    collection[i] = collection[i] * 3 + 2
    x = x + collection[i]
  }
  return x;
}

module.exports = hybrid_operation;

