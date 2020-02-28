const nums1 = [1, 2, 30, 400];
const nums2 = nums1.map(num => num * 2);
console.log(nums2);

const nums3 = [1, 2, 3, 4];
const nums4 = nums3.map(num => String(num));
console.log(nums4);

const arr5 = [1, '1', 2, {}];
const arr6 = arr5.map(num => typeof num);
console.log(arr6);

const arr7 = ['apple', 'banana', 'orange'];
const arr8 = arr7.map(word => word.toUpperCase());
console.log(arr8);

const arr9 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];

const arr10 = arr9.map(name => name.name);
console.log(arr10);
const arr11 = arr9.map(name => name.age);
console.log(arr11);

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];

const arr13 = array12.map(item => `${item.name} ${item.surname}`);
console.log(arr13);

const arr14 = [1, 3, 4, 5, 6, 7, 8];
const arr15 = arr14.map(item => {
  if (item % 2 === 0) return 'even';
  else return 'odd';
});

console.log(arr15);

const arr16 = [1, -3, 2, 8, -4, 5];
const arr17 = arr16.map(item => {
  return item < 1 ? item * -1 : item;
});
console.log(arr17);

const arr18 = [100, 200.25, 300.84, 400.3];
const arr19 = arr18.map(item => {
  return item.toFixed(2);
});
console.log(arr19);

const arr20 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];

const arr21 = arr20.map(obj => {
  let now = new Date('2019-11-01').getTime();
  let birthDate = new Date(obj.birth).getTime();
  let age = Math.floor((now - birthDate) * 3.17098e-11);

  obj.age = age;
  return obj;
});
console.log(arr21);
// from SO
// const arr21 = arr20.map(obj => {
//   const dateRef = new Date("2019-11-01");
//   const birthDate = new Date(obj.birth);
//   let age = dateRef.getFullYear() - birthDate.getFullYear();
//   const month = dateRef.getMonth() - birthDate.getMonth();
//   if (month < 0 || (month === 0 && dateRef.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   obj.age = age;
//   return obj;
// });
// console.log(arr21);

const arr22 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];

const arr23 = arr22.map(obj => {
  let date = new Date(obj.birth).toString().split(' ');
  return `
  <tr><td>${obj.name}</td><td>${date[2]} ${date[1]} ${date[3]}</td></tr>
  `;
});

console.log(arr23);
