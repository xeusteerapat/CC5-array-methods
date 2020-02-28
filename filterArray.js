const array1 = [1, 2, 30, 400];
const array2 = array1.filter(item => item > 10);
console.log(array2);

const array3 = [1, 2, 3, 4];
const array4 = array3.filter(item => item % 2 === 1);
console.log(array4);

const array5 = [1, '1', 2, {}];
const array6 = array5.filter(item => typeof item === 'number');
console.log(array6);

const array7 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const array8 = array7.filter(item => item.length > 6);
console.log(array8);

const array9 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
  { name: 'pineapple', age: 16 },
  { name: 'peach', age: 24 }
];

const array10 = array9.filter(item => item.age < 18);
console.log(array10);

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
  { name: 'pineapple', age: 16 },
  { name: 'peach', age: 24 }
];

const array12 = array11.filter(item => item.age !== 32);
console.log(array12);

const array13 = [1, -3, 2, 8, -4, 5];
const array14 = array13.filter(num => num > 0);
console.log(array14);

const array15 = [1, 3, 4, 5, 6, 7, 8];
const array16 = array15.filter(num => num % 3 === 0);
console.log(array16);

const array17 = ['peach', 1, -3, '2', {}, []];
const array18 = array17.filter(item => typeof item === 'string');
console.log(array18);

const array19 = ['APPLE', 'appLE', 'PEACH', 'PEach'];
const array20 = array19.filter(item => item === item.toUpperCase());
console.log(array20);

const array21 = [
  { name: 'apple', birth: '2001-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
  { name: 'peach', birth: '2002-10-13' }
];

const array22 = array21.filter(obj => obj.birth.slice(5, 7) === '10');
console.log(array22);

const array23 = [
  { name: 'apple', birth: '2001-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
  { name: 'peach', birth: '2002-10-13' }
];

const array24 = array23.filter(obj => obj.birth[0] < 2);
console.log(array24);
