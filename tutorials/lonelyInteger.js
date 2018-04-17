function lonelyInteger(arr) {
  let result = '';
  const arr1 = [];
  const arr2 = arr.reduce((prev, curr) => {
    if (prev.indexOf(curr) < 0 ) {
      prev.push(curr);
    } else {
      arr1.push(curr);
    }
    return prev;
  }, []);

  arr2.map((value) => {
    const found = arr1.find((num) => {
      return num === value;
    });
    if (typeof found === 'undefined') {
      result = value;
    }
  });

  return result;
}

console.log(lonelyInteger('0 0 1 2 2 3 3 4 4'.split(' ')));