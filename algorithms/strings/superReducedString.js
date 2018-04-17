function superReducedString(str) {
  let hasSpliced = false;
  str = str.split('');

  for (let i = 0, max = str.length; i < max - 1; i += 1) {
    if (str[i] === str[i + 1]) {
      str.splice(i, 2);
      hasSpliced = true;
    }
  }

  if (!str.length) {
    return 'Empty String';
  }

  if (!hasSpliced) {
    return str.join('');
  }

  return superReducedString(str.join(''));
}

console.log(superReducedString('aaabccddd'));

// tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh