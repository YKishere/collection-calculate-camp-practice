'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  for (var i in collection) {
    if ((collection[i] instanceof Array)) {
      for (var j in collection[i]) {
        arr.push(collection[i][j])
      }
    } else {
      arr.push(collection[i])
    }
  }
  return arr;
}


module.exports = double_to_one;
