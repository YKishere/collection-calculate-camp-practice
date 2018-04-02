'use strict';
var map_to_three_multiples = function (collections) {
  var arr = [];
  for (var i in collections) {
    arr.push(collections[i] * 3)
  }
  return arr;
};


module.exports = map_to_three_multiples;
