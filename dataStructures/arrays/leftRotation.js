function leftRotation(n, k, arr) {
  for (let i = 0; i < k; i += 1) {
    let first = arr.shift();
    arr.push(first);
  }

  return arr;
}

console.log(leftRotation(5, 4, '1 2 3 4 5'.split(' ')));