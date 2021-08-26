import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
  const pokemon = props.pokedex;
  const listItems = pokemon.map(pokemon =>
    <li key={pokemon.number}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <NumberList pokedex={pokedex} />,
  document.getElementById('root')
);
