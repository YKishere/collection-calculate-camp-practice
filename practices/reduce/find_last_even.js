'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var x = 0;
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      x = collection[i];
    } else {
      continue
    }
  }
  return x;
}


module.exports = find_last_even;
