// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

// Found an object oriented way of describing a card and deck.
// Uses composition to build up a deck out of cards.
function Card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function Deck() {
  this.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  this.cards = [];
  // This is not my algorithm.  It pushes a new card to cards after filling out
  // the value, name, and suit
  for (let s = 0; s < this.suits.length; s++) {
    for (let n = 0; n < this.names.length; n++) {
      this.cards.push(new Card(n + 1, this.names[n], this.suits[s]));
    }
  }
}

function Player(hand, name, hasWon=false) {
  this.hand = hand,
  this.name = name,
  this.hasWon = hasWon
}

function shuffle(array) {
  // reverses the sort.
  // array.sort(() => Math.random() - 1);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);

    const temporaryValue = array[i];
    array[i] = array[j];
    array[j] = temporaryValue;
  }

  return array;
}

const deck = new Deck();

const cards = deck.cards;

shuffle(cards);

const player1Hand = cards.splice(0, 26);
const player2Hand = cards.splice(0, 26);

while (player1Hand.length > 0 || player2Hand.length > 0){
  let player1Card = player1Hand.pop();
  let player2Card = player2Hand.pop();

if (player1Hand.length > 0 && player2Hand.length > 0) {
  console.log(`Pkayer 1 card: ${player1Card.value} of ${player1Card.suit}`);
  console.log(`Player 2 card: ${player2Card.value} of ${player2Card.suit}`);
}

  if (player1Card.value === player2Card.value) {
    console.log("War were declared");
    let player1WarChest = player1Hand.splice(0, 3);
    let player2WarChest = player2Hand.splice(0, 3);

    player1Card = player1Hand.pop();
    player2Card = player2Hand.pop();

    if (player1Card.value > player2Card.value) {
      console.log("War was won by player 1!");
      player1Hand.unshift(player1WarChest, player1Card, player2WarChest, player2Card);
      console.log(`Player 1 war chest: ${player1WarChest} player2 war chest ${player2WarChest}`);
    } else {
      console.log("War was won by player 2!");
      player2Hand.unshift(player2WarChest, player2Card, player1WarChest, player1Card);
      console.log(`Player 1 war chest: ${player1WarChest} player2 war chest ${player2WarChest}`);
    }

    console.log(player1Hand.length);
    console.log(player2Hand.length);
  } else if (player1Card.value >  player2Card.value) {
    console.log("Player 1 won!");

    player1Hand.unshift(player2Card, player1Card);

    console.log(player1Hand.length);
    console.log(player2Hand.length);
  } else if (player2Card.value > player1Card.value) {
    console.log("Player 2 won!");

    player2Hand.unshift(player1Card, player2Card);

    console.log(player1Hand.length);
    console.log(player2Hand.length);
  }
  console.log("--------------------------------------------");
}

console.log(player1Hand.length);
