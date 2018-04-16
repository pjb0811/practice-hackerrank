function breakingRecords(score) {
  /*
   * Write your code here.
   */
  let highestScore = -1;
  let lowestScore = -1;

  const highs = score.reduce((prev, curr, index) => {
    if (index === 0 || prev[index - 1] < curr) {
      prev.push(curr);
      highestScore += 1;
    } else {
      prev.push(prev[index - 1]);
    }
    return prev;
  }, []);

  const lowes = score.reduce((prev, curr, index) => {
    if (index === 0 || prev[index - 1] > curr) {
      prev.push(curr);
      lowestScore += 1;
    } else {
      prev.push(prev[index - 1]);
    }
    return prev;
  }, []);

  return [highestScore, lowestScore];
}

const score = '10 5 20 20 4 5 2 25 1'.split(' ').map(i => parseInt(i, 10));
console.log(breakingRecords(score));