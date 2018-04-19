function insertionSort2(n, arr) {
  // Complete this function
  for (let i = 1, max = arr.length; i < max; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(arr.join(' '));
  }
}

const arr = '1 4 3 5 6 2'.split(' ').map(Number);

console.log(insertionSort2(5, arr));