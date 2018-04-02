'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var x = 0;
  for (var i in collection) {
    x = x + collection[i];
  }
  x = x / collection.length;
  for(var j in arr){
    return arr[parseInt(x)];
    break;
  }
}

module.exports = average_to_letter;

