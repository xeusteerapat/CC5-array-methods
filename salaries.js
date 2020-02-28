let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(salary) {
  let sum = 0;
  for (let money of Object.values(salary)) {
    sum += money;
  }
  return sum;
}

console.log(sumSalaries(salaries));
