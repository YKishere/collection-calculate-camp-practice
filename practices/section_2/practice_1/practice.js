function count_same_elements(collection) {
  //在这里写入代码
  var arr = [];
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    arr.push({ key: collection[i], count: count }
    )
    i += count;
  }
  for (var n in arr) {
    return arr;
    break;
  }
}



module.exports = count_same_elements;
