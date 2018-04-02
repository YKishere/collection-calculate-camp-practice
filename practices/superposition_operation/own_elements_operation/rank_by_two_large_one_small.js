'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  function sortNumber(a, b) {
    return a - b;
  }
  collection = collection.sort(sortNumber);
  var i = 0;
  for (; i < collection.length - 3;) {
    collection.splice(i, 3, collection[i + 1], collection[i + 2], collection[i]);
    i = i + 3;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
rank_by_two_large_one_small(collection_a);