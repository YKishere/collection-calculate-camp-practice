'use strict';

function amount_even(collection) {

  //在这里写入代码
  var x = 0;
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      x = x + collection[i];
    }
  }
  return x;
}

module.exports = amount_even;
