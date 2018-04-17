function staircase(n) {
  /*
   * Write your code here.
   */
  const arr = Array.from({ length: n }, (value, key) => key);
  arr.map((numX, indexX) => {
    let str = '';
    arr.map((numY, indexY) => {
      str += (arr.length - 1) - indexX <= indexY ? '#' : ' ';
    });
    console.log(str);
  });
}


staircase(6);