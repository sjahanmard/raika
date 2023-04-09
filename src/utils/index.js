// export function factorial(userInt) {
//   if (userInt === 0) return 1;

//   if (isNaN(userInt) || userInt < 0) return NaN;

//   let i = 0,
//     carry = 0,
//     nextNumber,
//     result = userInt.toString().split("").reverse().map(Number);

//   while (--userInt) {
//     i = carry = 0;

//     while ((nextNumber = result[i++]) !== undefined || carry) {
//       carry = (nextNumber || 0) * userInt + carry;
//       result[i - 1] = carry % 10;
//       carry = Math.floor(carry / 10);
//     }
//   }

//   return Number(result.reverse().join(""));
// }

export function factorial(n) {
  if (n < 0) {
    return NaN;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
