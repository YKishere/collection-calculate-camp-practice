'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var data = {};
  collection.sort()
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    data[collection[i]] = count;
    i += count;
  }
  return (data)
}

module.exports = grouping_count;
