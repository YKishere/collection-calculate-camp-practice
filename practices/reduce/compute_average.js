'use strict';

function compute_average(collection) {
  //在这里写入代码
  var x = 0;
  for (var i in collection) {
    x = x + collection[i]
  }
  return x/collection.length
}

module.exports = compute_average;

