function sockMerchant(n, arr) {
  // Complete this function
  const objects = {};
  let count = 0;

  arr.map(n => {
    if (objects[n]) {
      objects[n] += 1;
    } else {
      objects[n] = 1;
    }
  });

  Object.keys(objects).map(key => {
    if (objects[key] / 2 >= 1) {
      count += Math.floor(objects[key] / 2);
    }
  });
  return count;
}
const arr = '4 5 5 5 6 6 4 1 4 4 3 6 6 3 6 1 4 5 5 5'.split(' ').map(Number);
console.log(sockMerchant(arr.length, arr));