function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr = [];
  for (var i in collection_a) {
    for (var key in collection_a[i]) {
      for (var j in object_b.value) {
        if (object_b.value[j] === collection_a[i][key]) {
          arr.push(object_b.value[j])
          break
        }
      }
    }
  }
  return arr;
}


module.exports = collect_same_elements;
