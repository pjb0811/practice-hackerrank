function towerBreakers(n, m) {
  // Complete this function
  if (m === 1) {
    return 2;
  }
  return n % 2 === 0 ? 2 : 1;
}

console.log(towerBreakers(2, 2));