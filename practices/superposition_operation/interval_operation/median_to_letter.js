'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az'];
  var x = (collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2;
  return arr[Math.ceil(x) - 1];
}


module.exports = median_to_letter;
