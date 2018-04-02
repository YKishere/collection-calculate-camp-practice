'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 3 == 0) {
      arr.push(collection[i])
    }
  }
  return (arr)
}

module.exports = choose_multiples_of_three;
