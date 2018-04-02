'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var x = collection[0];
  for (var i in collection) {
    if (collection[i] < x) {
      x = collection[i]
    }
  }
  return x;
}

module.exports = collect_min_number;

