"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.factorial = factorial;
function factorial(n) {
  if (n < 0) {
    return NaN;
  }
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
