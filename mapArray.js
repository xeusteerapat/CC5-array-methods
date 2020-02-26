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
