function nimGame(pile) {
  // Complete this function
  let sum = 0;
  pile.map(n => {
    sum = sum ^ n;
  });

  return sum === 0 ? 'Second' : 'First';
}
const pile = '1 1'.split(' ').map(Number);
console.log(nimGame(pile));