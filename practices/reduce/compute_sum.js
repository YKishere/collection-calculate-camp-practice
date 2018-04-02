'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var x = 0;
  for (var i in collection) {
    x = x + collection[i]
  }
  return x;
}

module.exports = calculate_elements_sum;

