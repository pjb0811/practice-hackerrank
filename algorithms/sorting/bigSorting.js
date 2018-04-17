function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      for (let i = 0, max = a.length; i < max; i += 1) {
        if (a[i] === b[i]) {
          continue;
        } else {
          return a[i] - b[i];
        }
      }
    }
  });
}

const str = `1234
11
2
3`.split('\n');

console.log(bigSorting(str));