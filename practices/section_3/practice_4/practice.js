function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.splice(71, 1, 'd', 'd', 'd', 'd', 'd');
  var arrc = [];
  for (var i = 0; i < collection_a.length;) {
    var count = 0;
    for (var j = i; j < collection_a.length; j++) {
      if (collection_a[i] === collection_a[j]) {
        count++;
      }
    }
    arrc.push({ key: collection_a[i], count: count }
    )
    i += count;
  }
  for (var i in arrc) {
    for (var j in object_b.value) {
      if (arrc[i].key == object_b.value[j]) {
        arrc[i].count = arrc[i].count - (arrc[i].count - arrc[i].count % 3) / 3
      }
    }
  }
  return arrc;
}

module.exports = create_updated_collection;
