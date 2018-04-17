function birthdayCakeCandles(arr) {
  /*
   * Write your code here.
   */
  const max = arr.sort((a, b) => {
    return parseInt(a, 10) - parseInt(b, 10);
  })[arr.length - 1];

  const index = arr.findIndex((num) => {
    return num === max;
  });

  return arr.length - index;
}

const test = '1 1 2 3 4';

console.log(birthdayCakeCandles(test.split(' ')));