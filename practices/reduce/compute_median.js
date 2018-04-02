'use strict';

function compute_median(collection) {
  //在这里写入代码
  function sortNumber(a, b) {
    return a - b
  }
  var arr = collection.sort(sortNumber);
  var len = arr.length;
  if (len % 2 == 0) {
    return ((arr[len / 2 - 1] + arr[len / 2]) / 2);
  } else {
    return (arr[(len + 1) / 2 - 1]);
  }
}


module.exports = compute_median;


