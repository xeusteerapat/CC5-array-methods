// from filter contacts
function lookUpProfile(name, prop) {
  // Only change code below this line
  const ans = contacts.filter(contact => {
    return contact.firstName === name;
  });

  // not so good
  if (ans.length !== 0) {
    if (prop in ans[0]) {
      return ans[0][prop];
    }
    return 'No such property';
  }
  return 'No such contact';
}
