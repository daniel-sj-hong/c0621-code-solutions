var array = [
  {
    isbn: '12345',
    title: 'LOTR',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '2222222',
    title: 'LOTR',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '111111',
    title: 'Harry Potter',
    author: 'JK Rowling'
  }
];

console.log('array:', array);
console.log('typeof array:', typeof array);
var result = JSON.stringify(array);
console.log('result:', result);
console.log('typeof result:', typeof result);

var student = '{"numberId": "100", "StringName": "Daniel Hong"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var object = JSON.parse(student);
console.log('object:', object);
console.log('typeof object:', typeof object);
