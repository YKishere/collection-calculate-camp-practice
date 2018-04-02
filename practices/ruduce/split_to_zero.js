'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var arr = [];
  var x;
  for (var i = 0; i < 100; i++) {
    if (number % interval == 0) {
      x = number - interval * i;
      arr.push(parseFloat((x).toFixed(2)))
      if (number - interval * i === 0) {
        break;
      }
    } else {
      x = number - interval * i;
      arr.push(parseFloat((x).toFixed(2)))
      if (number - interval * i < 0) {
        break;
      }
    }
  }
  return arr;;

}

module.exports = spilt_to_zero; 
