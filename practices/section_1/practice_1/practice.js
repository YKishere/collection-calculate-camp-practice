function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr = [];
  for (var j in collection_a) {
    for (var i in collection_b) {
      if (collection_b[i] === collection_a[j]) {
        arr.push(collection_b[i])
        break
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
