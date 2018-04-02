'use strict';
function one_add_next_multiply_three(collection) {
  var arr = [];
  for (var i in collection) {
    if (i < collection.length - 1) {
      arr.push((collection[i] + collection[++i]) * 3)
    }
  }
  return arr;
}
module.exports = one_add_next_multiply_three;
