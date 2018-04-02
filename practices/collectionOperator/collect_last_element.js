'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var a = 0;
  for (var i in collection) {
    a++;
  }
  return a;
  console.log(collection[a])
}

module.exports = collect_last_element;
