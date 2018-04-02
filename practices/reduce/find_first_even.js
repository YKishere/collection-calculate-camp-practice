'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      return collection[i]
      break
    } else {
      continue
    }
  }
}


module.exports = find_first_even;

