function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr = [];
  for (var j in collection_a) {
    for (var i in object_b.value) {
      if (object_b.value[i] === collection_a[j]) {
        arr.push(object_b.value[i])
        break
      }
    }
  }
  return arr;
}



module.exports = collect_same_elements;
