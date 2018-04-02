'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = collection.split("->");
  arr = arr.map((value) => {
    return parseInt(value);
  })
  function sortNumber(a, b) {
    return a - b;
  }
  arr = arr.sort(sortNumber);
  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
}

module.exports = compute_chain_median;
