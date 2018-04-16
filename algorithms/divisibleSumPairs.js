function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for (let i = 0, max = ar.length; i < max - 1; i += 1) {
    for (let j = i + 1; j < max; j += 1) {
      if ((ar[i] + ar[j]) % k === 0) {
        result += 1;
      }
    }
  }
  return result;
}
const n = 6;
const k = 3;
const ar = '1 3 2 6 1 2'.split(' ').map(i => parseInt(i, 10));
console.log(divisibleSumPairs(n, k, ar));