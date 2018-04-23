function electronicsShop(keyboards, drives, b) {
  let result = 0;
  let max = 0;

  keyboards.map((k, i) => {
    drives.map((d, j) => {
      const sum = keyboards[i] + drives[j];
      if (sum <= b) {
        result += 1;
        max = Math.max(max, sum);
      }
    });
  });

  return result ? max : -1;
}