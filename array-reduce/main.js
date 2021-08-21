const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(sum));

const product = (accumulator, currentValue) => accumulator * currentValue;
console.log(numbers.reduce(product));

const balance = account.reduce((balance, transaction) => {
  if (transaction.type === 'deposit') {
    balance += transaction.amount;
  } else {
    balance -= transaction.amount;
  }
  return balance;
}, 0);
console.log(balance);

const composite = traits.reduce((accumulator, currentValue) => {
  return Object.assign(accumulator, currentValue);
}, {});
console.log(composite);
