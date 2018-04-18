function minimumAbsoluteDifference(n, arr) {
  // Complete this function

  arr = arr.map(Number).sort((a, b) => a - b);
  let result = Number.MAX_VALUE;
  for (let i = 1, max = arr.length; i < max; i += 1) {
    result = Math.min(result, Math.abs(arr[i - 1] - arr[i]));
  }

  return result;
}



const n = 3;
const arr = '-36205423 91202859 159879751'.split(' ').map(i => parseInt(i));

console.log(minimumAbsoluteDifference(n, arr));