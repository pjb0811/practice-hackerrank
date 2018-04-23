function countingValleys(n, s) {
  // Complete this function
  let valleys = 0;
  let count = 0;
  s.split('').map((word, index) => {
    if (word === 'U') {
      count += 1;
    } else {
      count -= 1;
      if (count === -1) {
        valleys += 1;
      }
    }
  });

  return valleys;
}