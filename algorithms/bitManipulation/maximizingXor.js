function maximizingXor(l, r) {
  // Complete this function
  let max = 0;

  for (let i = l; i <= r; i += 1) {
    for (let j = i + 1; j <= r; j += 1) {
      max = Math.max(max, i ^ j);
    }
  }

  return max;
}

console.log(maximizingXor(10, 15));