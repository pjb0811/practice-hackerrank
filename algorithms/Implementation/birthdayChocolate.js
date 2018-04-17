function birthdayChocolate(n, s, d, m) {
  const max = s.length - m + 1;
  let result = 0;
  for (let i = 0; i < max; i += 1 ) {
    const sum = s.slice(i, i + m).reduce((prev, curr) => prev + curr);
    if (sum === d) {
      result += 1;
    }
  }

  return result;
}

const n = 5;
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

console.log(birthdayChocolate(n, s, d, m));