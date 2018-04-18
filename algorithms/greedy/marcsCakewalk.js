function marcsCakewalk(calorie) {
  // Complete this function
  return calorie.sort((a, b) => b - a).reduce((prev, curr, index) => {
    return prev + (curr * Math.pow(2, index));
  }, 0);
}

const calorie = '1 3 2'.split(' ').map(Number);
console.log(marcsCakewalk(calorie));