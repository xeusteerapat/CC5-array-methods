const nums1 = [1, 2, 30, 400];
const nums2 = nums1.map(num => num * 2);
console.log(nums2);

const nums3 = [1, 2, 3, 4];
const nums4 = nums3.map(num => String(num));
console.log(nums4);

const arr5 = [1, "1", 2, {}];
const arr6 = arr5.map(num => typeof num);
console.log(arr6);

const arr7 = ["apple", "banana", "orange"];
const arr8 = arr7.map(word => word.toUpperCase());
console.log(arr8);

const arr9 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
];

const arr10 = arr9.map(name => name.name);
console.log(arr10);
const arr11 = arr9.map(name => name.age);
console.log(arr11);

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" }
];

const arr13 = array12.map(item => `${item.name} ${item.surname}`);
console.log(arr13);

const arr14 = [1, 3, 4, 5, 6, 7, 8];
const arr15 = arr14.map(item => {
  if (item % 2 === 0) return "even";
  else return "odd";
});

console.log(arr15);

const arr16 = [1, -3, 2, 8, -4, 5];
const arr17 = arr16.map(item => {});
