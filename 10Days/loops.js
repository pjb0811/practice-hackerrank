function vowelsAndConsonants(s) {
  s.split('').filter((letter) => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      console.log(letter);
    } else {
      return letter;
    }
  }).map((letter) => {
    console.log(letter);
  });
}

vowelsAndConsonants('javascriptloops');