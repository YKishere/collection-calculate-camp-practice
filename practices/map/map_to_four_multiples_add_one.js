'use strict';
var map_to_four_multiples_add_one = function (collection) {
  var arr = [];
  for (var i in collection) {
    arr.push(collection[i] * 4 + 1)
  }
  return arr;
};

module.exports = map_to_four_multiples_add_one;
