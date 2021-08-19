const takeAChance = require('./take-a-chance');

const variable = takeAChance('daniel');

variable.then(value => {
  console.log(value);
});

variable.catch(error => {
  console.log(error.message);
});
