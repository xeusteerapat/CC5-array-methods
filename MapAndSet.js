// 1st attemp with reduce
// function unique(arr) {
//   const ans = arr.reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr] += 1;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});
//   return ans;
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O"
// ];
// const answers = Object.keys(unique(values));
// console.log(answers);
// (unique(values)); // Hare, Krishna, :-O

function unique(arr) {
  let set = new Set(arr);
  set.forEach(value => {
    console.log(value);
  });
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O
