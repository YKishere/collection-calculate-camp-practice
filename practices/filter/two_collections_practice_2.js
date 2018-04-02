'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = collection_a;
  for (var j in collection_a) {
    for (var i in collection_b) {
      if (collection_b[i] === collection_a[j]) {
        var index = arr.indexOf(collection_b[i]);
        arr.splice(index, 1);
      }
    }
  }
  return arr;
}


module.exports = choose_no_common_elements;
