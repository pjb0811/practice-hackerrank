function migratoryBirds(n, ar) {
  let objects = {};
  let max = 0;
  let result = '';

  ar.map((num) => {
    if (!objects[num]) {
      objects[num] = 1;
    } else {
      objects[num] += 1;
    }
  });

  for (let key in objects) {
    if (max < objects[key]) {
      max = objects[key];
      result = key;
    }
  }

  return result;
}

const n = 6;
const ar = '1 2 4 4 4 5'.split(' ').map(i => parseInt(i));

// migratoryBirds(n, ar);
console.log(migratoryBirds(n, ar));