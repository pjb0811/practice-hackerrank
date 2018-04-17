function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) {
    return memo[num];
  }
  if (num <= 1) {
    return num ? 1 : 0;
  }
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}

console.log(fibonacci(parseInt(process.argv.slice(2).pop()), {}));