'use strict';

function find_element_first_subscript(collection, element) {
  //在这里写入代码
  for (var i in collection) {
    if (element == collection[i]) {
      return i;
      break
    } else {
      continue;
    }
  }
}


module.exports = find_element_first_subscript;

