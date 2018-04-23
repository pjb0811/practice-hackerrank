function luckBalance(n, k, contests) {
  // Complete this function
  let total = 0;

  contests.sort((a, b) => b[0] - a[0]).map(contest => {
    if (contest[1] === 0) {
      total += contest[0];
    } else {
      if (contest[1] === 1 && k > 0) {
        k -= 1;
        total += contest[0];
      } else {
        total -= contest[0];
      }
    }
  });

  return total;
}

const contests = [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ];
console.log(luckBalance(6, 3, contests));