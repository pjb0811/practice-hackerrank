
/*
* Complete the diagonalDifference function below.
*/
function diagonalDifference(a) {
  /*
  * Write your code here.
  */
  let result1 = 0, result2 = 0;

  a.map((x, indexX) => {
    x.map((y, indexY) => {
      if (indexX === indexY) {
        result1 += y;
      }
      if (((x.length - 1) - indexX) === indexY) {
        result2 += y;
      }
    });
  });

  return Math.abs(result1 - result2);
}

const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(array));
