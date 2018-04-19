function sumVsXOR(n) {
  const count = n.toString(2).split('').filter(n => n === '0').length;

  if (n === 0) {
    return 1;
  }

  return Math.pow(2, count);
}

console.log(sumVsXOR(1));