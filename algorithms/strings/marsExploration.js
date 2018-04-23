function marsExploration(s) {
  // Complete this function
  let count = 0;
  const SOS = 'SOS';

  s.split('').map((char, i) => {
    if (char.charCodeAt(0) !== SOS.charCodeAt(i % 3)) {
      count += 1;
    }
  });
  /* s.match(/[A-Z]{3}/g).map(word => {
    const result = word.match(/[^SO]/g);
    if (result) {
      count += result.length;
    }
  }); */

  return count;
}

console.log(marsExploration('QQQ'));