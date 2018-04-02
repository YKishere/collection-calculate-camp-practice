'use strict';

function get_integer_interval_2(number_a, number_b) {
    var y = [];
    if (number_a % 2 == 0) {           //a=2
        if (number_b % 2 == 0) {
            if (number_a > number_b) {  //b=2
                var x = number_a + 2;
                for (var i = 0; i < number_a; i++) {
                    x = x - 2;
                    y.push(x);
                    if (x < number_b + 2) {
                        break
                    }
                }
                return (y)
            } else {  //a<=b
                var x = number_a - 2;
                for (var i = 0; i < number_a; i++) {
                    x = x + 2;
                    y.push(x);
                    if (x > number_b - 2) {
                        break
                    }
                }
                return (y)
            }
        } else {  //b=1
            if (number_a < number_b) {
                var x = number_a - 2;
                for (var i = 0; i < number_b; i++) {
                    x = x + 2;
                    y.push(x);
                    if (x > number_b - 2) {
                        break
                    }

                }
                return (y)
            } else {
                var x = number_a + 2;
                for (var i = 0; i < number_a; i++) {
                    x = x - 2;
                    y.push(x);
                    if (x < number_b + 2) {
                        break
                    }

                }
                return (y)
            }
        }
    } else {                      //a=1
        if (number_b % 2 == 0) {
            if (number_a > number_b) {
                var x = number_a + 1;
                for (var i = 0; i < number_a; i++) {
                    x = x - 2;
                    y.push(x);
                    if (x < number_b + 2) {
                        break
                    }

                }
                return (y)
            } else {
                var x = number_a - 1;
                for (var i = 0; i < number_b; i++) {
                    x = x + 2;
                    y.push(x);
                    if (x > number_b - 2) {
                        break
                    }

                }
                return (y)
            }
        } else {
            if (number_a > number_b) {
                var x = number_a + 1;
                for (var i = 0; i < number_a; i++) {
                    x = x - 2;
                    y.push(x);
                    if (x < number_b + 2) {
                        break
                    }

                }
                return (y)
            } else {
                if (number_a < number_b) {
                    var x = number_a - 1;
                    for (var i = 0; i < number_b; i++) {
                        x = x + 2;
                        y.push(x);
                        if (x > number_b - 2) {
                            break
                        }

                    }
                    return (y)
                } else {
                    return (y)
                }
            }
        }
    }
}


module.exports = get_integer_interval_2;
