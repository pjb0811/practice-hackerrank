function runningTime(arr) {
  // Complete this function
  let shift = 0;
  for (let i = 0, max = arr.length; i < max; i += 1) {
    for (let j = i + 1; j < max; j += 1) {
      if (arr[i] > arr[j]) {
        shift += 1;
      }
    }
  }

  return shift;
}

const arr = '4 4 3 4'.split(' ').map(Number);
console.log(runningTime(arr));