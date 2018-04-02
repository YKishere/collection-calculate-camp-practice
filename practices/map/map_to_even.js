'use strict';
function map_to_even(collection) {
  var arr = [];
  for (var i in collection) {
    arr.push(collection[i] * 2)
  }
  return arr;
}
module.exports = map_to_even;
