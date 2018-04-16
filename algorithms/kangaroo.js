function kangaroo(x1, v1, x2, v2) {
  let kangaroo1 = x1;
  let kangaroo2 = x2;
  let result = 'NO';
  for (let i = 0; i <= 10000; i += 1) {
    kangaroo1 += v1;
    kangaroo2 += v2;
    if (kangaroo1 === kangaroo2) {
      result = 'YES';
      break;
    }
  }
  return result;
}

console.log(kangaroo(0, 3, 4, 2));