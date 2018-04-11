/*
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
  /*
   * Write your code here.
   */
  let plus = 0, minus = 0, zero = 0;

  arr.map(num => {
    if (num > 0) {
      plus += 1;
    } else if (num < 0) {
      minus += 1;
    } else {
      zero += 1;
    }
  });

  console.log(`${(plus / arr.length).toFixed(6)}
  ${(minus / arr.length).toFixed(6)}
  ${(zero / arr.length).toFixed(6)}`);
}

plusMinus('-4 3 -9 0 4 1'.split(' '));