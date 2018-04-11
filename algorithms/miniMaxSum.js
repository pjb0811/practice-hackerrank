function miniMaxSum(arr) {
  /*
   * Write your code here.
   */
  const minArr = arr.sort().slice(0, arr.length - 1);
  const maxArr = arr.sort().slice(1);

  const minSum = minArr.reduce((prev, curr) => {
    return parseInt(prev) + parseInt(curr);
  });

  const maxSum = maxArr.reduce((prev, curr) => {
    return parseInt(prev) + parseInt(curr);
  });

  console.log(minSum, maxSum);
}

miniMaxSum('1 2 3 4 5'.split(' '));