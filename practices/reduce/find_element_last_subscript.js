'use strict';

function find_element_last_subscript(collection, element) {
  //在这里写入代码
  for (var i in collection) {
    if (collection[i] == element) {
    } else {
      continue;
    }
  }
  return i - 2;
}


module.exports = find_element_last_subscript;
