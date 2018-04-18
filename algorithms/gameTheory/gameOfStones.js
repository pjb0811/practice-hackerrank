function gameOfStones(n) {
  // Complete this function

  return (n % 7 <= 1) ? 'Second' : 'First';
}

for (let i = 1; i <= 10; i += 1) {
  console.log(i, gameOfStones(i));
}