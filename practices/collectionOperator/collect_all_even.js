'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var x = new Array();
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      x.push(collection[i])
    }
  }
  return x;
}

module.exports = collect_all_even;
