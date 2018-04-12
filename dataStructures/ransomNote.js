function ransomNote(magazine, ransom) {
  let result = 'Yes';

  for (let i = 0, maxI = ransom.length; i < maxI; i += 1) {
    let targetIndex = -1;

    for (let j = 0, maxJ = magazine.length; j < maxJ; j += 1) {
      if (magazine[j] === ransom[i]) {
        targetIndex = j;
        break;
      }
    }

    if (targetIndex > -1) {
      magazine.splice(targetIndex, 1);
    } else {
      result = 'No';
      break;
    }
  }
  console.log(result);
}

// yes
// const magazine = 'give me one grand today night'.split(' ');
// const ransom = 'give one grand today'.split(' ');
// ransomNote(magazine, ransom);

// no
const magazine = 'two times three is not four'.split(' ');
const ransom = 'two times two is four'.split(' ');
ransomNote(magazine, ransom);