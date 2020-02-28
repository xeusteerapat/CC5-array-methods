function anagram(arr) {
  let map = new Map();

  for (let word of arr) {
    let sortedWord = word
      .toLowerCase()
      .split('')
      .sort()
      .join();
    map.set(sortedWord, word);
  }
  return map.values();
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(anagram(arr));
