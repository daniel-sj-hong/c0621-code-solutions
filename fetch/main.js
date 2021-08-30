const fetchResponsePromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

console.log(fetchResponsePromise);

const fetchResponsePromise2 = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data));

console.log(fetchResponsePromise2);
