function iceCreamParlor(m, arr) {
  const max = arr.length;
  for (let i = 0; i < max; i += 1) {
    for (let j = i + 1; j < max; j += 1) {
      console.log(arr[i], arr[j]);
    }
  }
}

const m = 4;
const arr = '1 4 5 3 2'.split(' ').map(i => parseInt(i));

iceCreamParlor(m, arr);