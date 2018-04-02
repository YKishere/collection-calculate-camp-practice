'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var y = [];
  if (number_a > number_b) {
    var x = number_a + 1;
    for (var i = 0; i < number_a; i++) {
      x = x - 1;
      y.push(x)
      if (x < number_b + 1) {
        break
      }
    }
    return (y)
  } else {
    if (number_a < number_b) {
      var x = number_a - 1;
      for (var i = 0; i < number_b; i++) {
        x = x + 1;
        y.push(x)
        if (i > number_b - 1) {
          break
        }
      }
      return (y)
    } else {
      y.push(number_a)
      return (y)
    }
  }
}

module.exports = get_integer_interval;

