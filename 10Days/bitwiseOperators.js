function bitwiseOperators(n, k) {
  const result = [];

  for (let i = 1; i < n; i += 1) {
    for (let j = i + 1; j <= n; j += 1) {
      if ((i & j) < k) {
        result.push(i & j);
      }
    }
  }

  return result.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
}

console.log(bitwiseOperators(955, 236));