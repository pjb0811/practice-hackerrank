function migratoryBirds(n, ar) {
  let result = '';
  /* ar.sort((a, b) => a - b).reduce((prev, curr, index) => {
    if (prev[index - 1] === curr) {
      result = curr;
    } else {
      count = 1;
    }
    prev.push(curr);
    return prev;
  }, []); */

  return result;
}

const n = 6;
const ar = '1 4 4 4 5 3'.split(' ').map(i => parseInt(i));

console.log(migratoryBirds(n, ar));