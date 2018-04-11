function lonelyInteger(arr) {
  const temp = [];
  const result = arr.reduce((prev, curr) => {
    if (prev.indexOf(curr) < 0 ) {
      prev.push(curr);
    } else {
      temp.push(curr);
    }
    return prev;
  }, []);

  console.log(temp);
  return result;
}

console.log(lonelyInteger('0 0 1 2 1'.split(' ')));