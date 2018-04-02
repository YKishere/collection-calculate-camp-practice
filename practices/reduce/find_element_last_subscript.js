'use strict';

function find_element_last_subscript(collection, element) {
  //在这里写入代码
  for (var i in collection) {
    if (element == collection[i]) {
      var x = i;
    } else {
      continue;
    }
  }
  return x;
}


module.exports = find_element_last_subscript;
