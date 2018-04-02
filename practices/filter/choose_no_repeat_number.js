'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var res = [];
  var obj = {};
  for (var i = 0; i < collection.length; i++) {
    if (!obj[collection[i]]) {
      obj[collection[i]] = 1;
      res.push(collection[i]);
    }
  }
  return res;
}


module.exports = choose_no_repeat_number;
