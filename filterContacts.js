//Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  const ans = contacts.filter(contact => {
    return contact.firstName === name;
  });

  // early exit condition
  if (ans.length === 0) {
    return 'No such contact';
  }

  if (!ans[0][prop]) {
    return 'No such property';
  }

  return ans[0][prop];
}
// Change these values to test your function
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'potato'));
console.log(lookUpProfile('Akira', 'address'));
// console.log(contacts[1]['likes']);
