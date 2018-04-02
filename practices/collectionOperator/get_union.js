'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var arr = new Array();
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      var str = arguments[i][j];
      if (!obj[str]) {
        obj[str] = 1;
        arr.push(str);
      }
    }
  }
  return arr;
}

module.exports = get_union;

