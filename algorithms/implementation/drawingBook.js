function drawingBook(n, p) {
  if (n % 2 === 0) {
    n += 1;
  }
  const a = Math.abs(p / 2);
  const b = Math.abs((p - n) / 2);
  const min = Math.min(a, b);
  return Math.floor(min);
}

console.log(drawingBook(5, 4));