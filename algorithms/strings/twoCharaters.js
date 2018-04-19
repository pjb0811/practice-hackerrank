function twoCharaters(s) {
  const uniques = [...new Set(s.split(''))];
  const len = uniques.length;
  const regex = /(.)(?=\1)/;
  let temp = s;
  let result = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const regex1 = new RegExp(`[^${uniques[i]}${uniques[j]}]`, 'g');
      temp = temp.replace(regex1, '');

      if (!regex.test(temp)) {
        if (temp.length > result) {
          result = temp.length;
        }
      }
      temp = s;
    }
  }
  return result;
}

console.log(twoCharaters('beabeefeab'));