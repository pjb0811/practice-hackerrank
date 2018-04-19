function gridChallenge(grid) {
  // Complete this function

  grid = grid.map(str => {
    return str.split('').sort().join('');
  });

  for (let i = 0, max = grid.length; i < max; i += 1) {
    for (let j = 0; j < max - 1; j += 1) {
      if (grid[j][i] > grid[j + 1][i]) {
        return 'NO';
      }
    }
  }

  return 'YES';
}

const grid = `ppp
ypp
wyw`.split('\n');

console.log(gridChallenge(grid));