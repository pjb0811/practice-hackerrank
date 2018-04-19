function insertionSort1(n, arr) {
  // Complete this function
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
      arr[i - 1] = temp;
    }
  }
  console.log(arr.join(' '));
}

const arr = '2 4 6 8 3'.split(' ').map(Number);

console.log(insertionSort1(5, arr));