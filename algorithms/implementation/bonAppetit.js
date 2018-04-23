function bonAppetit(k, arr, n) {
  // Complete this function
  let value = arr.reduce((prev, curr, index) => {
    return index === k ? prev : prev + curr;
  }) / 2;

  return value === n ? 'Bon Appetit' : n - value;
}

const arr = '3 10 2 9'.split(' ').map(Number);
console.log(bonAppetit(1, arr, 12));