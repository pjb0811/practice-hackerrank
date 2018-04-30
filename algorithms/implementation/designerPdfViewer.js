function designerPdfViewer(h, word) {
  // Complete this function
  let max = 0;
  word.split('').map(char => {
    let index = char.charCodeAt(0) % 'a'.charCodeAt(0);
    max = Math.max(max, h[index]);
  });

  return max * word.length;
}
