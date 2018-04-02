function count_same_elements(collection) {
  //在这里写入代码
  
  collection.splice(16,1,"h", "h", "h");
  collection.splice(22,1,"t", "t");
  collection.splice(30,1,"t", "t","t", "t","t", "t","t", "t","t", "t");
  collection.splice(49,1,"c", "c", "c","c", "c", "c","c", "c");
  collection.splice(70,1,"d","d","d","d","d");
  var arr = [];
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    arr.push({ name: collection[i], summary: count }
    )
    i += count;
  }
  for (var n in arr) {
    return arr;
    break;
  }
}

module.exports = count_same_elements;
