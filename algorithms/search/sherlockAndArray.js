function sherlockAndArray(a) {
  if (a.length <= 1) {
    return 'YES';
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let m = 1; m < a.length; m++) {
    rightSum += a[m];
  }

  for (let i = 1; i < a.length - 1; i++) {
    leftSum += a[i - 1];
    rightSum -= a[i];
    if (leftSum === rightSum) {
      return 'YES';
    }
  }
  return 'NO';
}
const a = '1 2 3 3'.split(' ').map(Number);
console.log(sherlockAndArray(a));