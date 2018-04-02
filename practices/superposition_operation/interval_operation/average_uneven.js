'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var x = 0;
  var count = 0;
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      continue;
    } else {
      x = x + collection[i];
      count++;
    }
  }
  return x / count;
}

module.exports = average_uneven;
