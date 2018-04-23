function caesarCipher(s, k) {
  // Complete this function
  return s.replace(/([a-z])|([A-Z])/g, (char, lower, upper) => {
    const a = (upper ? 'A' : 'a').charCodeAt(0);
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code + k - a) % 26) + a);
  });
}

console.log(caesarCipher('Hello_World!', 4));

// Lipps_Asvph!