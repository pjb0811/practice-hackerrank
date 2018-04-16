function arrays(nums) {
  const results = nums.sort((a, b) => a - b).reduce((prev, curr) => {
    if (prev.indexOf(curr) < 0 ) {
      prev.push(curr);
    }
	  return prev;
  }, []);

  return results[results.length - 2];
}

console.log(arrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));