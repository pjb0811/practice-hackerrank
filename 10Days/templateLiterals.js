
function sides(literals, ...expressions) {
  const [A, P] = expressions;
  return [(P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4, (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4];
}

function main() {
  let s1 = 10;
  let s2 = 14;

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

  console.log((s1 === x) ? s1 : -1);
  console.log((s2 === y) ? s2 : -1);
}

main();