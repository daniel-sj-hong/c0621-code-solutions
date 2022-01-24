console.log('Lodash is loaded:', typeof _ !== 'undefined');

// set up the players and the hands that they are going to have
const players = [
  {
    name: 'player1',
    hand: []
  },
  {
    name: 'player2',
    hand: []
  },
  {
    name: 'player3',
    hand: []
  },
  {
    name: 'player4',
    hand: []
  }
];

// create the different suits
const suits = ['clubs', 'hearts', 'diamonds', 'spades'];
// create the face cards
const honorCards = ['King', 'Queen', 'Jack', 'Ace'];

// create the deck
// give each number a suit and honor card
let deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 1; j <= 10; j++) {
    const card = { suit: suits[i], rank: j };
    deck.push(card);
    console.log(card);
  }
  for (let k = 0; k < honorCards.length; k++) {
    const card = { suit: suits[i], rank: honorCards[k] };
    deck.push(card);
    console.log(card);
  }
}

// shuffle the deck
deck = _.shuffle(deck);
console.log(deck);

// with the shuffled deck, take the top 2 cards and give it to a player and repeat for each player
for (let i = 0; i < players.length; i++) {
  players[i].hand.push(deck.pop());
  players[i].hand.push(deck.pop());
  console.log(players[i].hand);
}

// create the result and the player that is going to win
let maxScore = 0;
let player = '';

// determine the score of the hands of each player
// if the card is an Ace, add 11 to the total score or else add 10
for (let i = 0; i < players.length; i++) {
  let score = 0;
  for (let j = 0; j < players[i].hand.length; j++) {
    const card = players[i].hand[j];
    if (Number.isInteger(card.rank)) {
      score += card.rank;
    } else if (card.rank === 'Ace') {
      score += 11;
    } else {
      score += 10;
    }
  }

  // update the max score if there's a new higher score
  if (maxScore < score) {
    maxScore = score;
    player = players[i];
  }
}

// console the winner
console.log('Your max score is:', maxScore);
console.log('winner is:', player);
