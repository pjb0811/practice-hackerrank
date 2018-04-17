function applesAndOranges(s, t, a, b, apples, oranges) {
  const applesCount = apples.filter((apple) => {
    const pos = (a + apple);
    return (s <= pos) && (t >= pos);
  });

  const orangeCount = oranges.filter((orange) => {
    const pos = (b + orange);
    return (s <= pos) && (t >= pos);
  });

  console.log(applesCount.length);
  console.log(orangeCount.length);
}

applesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
