function getTotalX(a, b) {
  /*
   * Write your code here.
   */
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  const result = [];

  for (let i = maxA; i <= minB; i += 1) {
    result.push(i);
  }
  return result.filter(num => {
    return a.every(i => num % i === 0) && b.every(j => j % num === 0);
  });
}

const a = '2 4'.split(' ').map(i => parseInt(i, 10));
const b = '16 32 96'.split(' ').map(i => parseInt(i, 10));

console.log(getTotalX(a, b));