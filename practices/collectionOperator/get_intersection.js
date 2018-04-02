'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var arrz = [];
  for (var i in collection_b) {
    for (var j in collection_a) {
      if (collection_b[i] == collection_a[j]) {
        arrz.push(collection_b[i])
        break
      }
    }
  }
  return (arrz)
}


module.exports = get_intersection;
