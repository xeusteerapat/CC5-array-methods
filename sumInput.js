function sumInput() {
  const arr = [];
  let input;

  while (true) {
    input = Number(prompt("Enter number"));
    if (!input) break;
    arr.push(input);
  }

  let ans = 0;
  for (let item of arr) {
    ans += item;
  }
  console.log(ans);
  return ans;
}

sumInput();
