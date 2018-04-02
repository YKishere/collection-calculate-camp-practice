'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  for (var i in collection) {
    for (var j in collection[i]) {
      arr.push(collection[i][j])
    }
  }
  var res = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = double_to_one;
