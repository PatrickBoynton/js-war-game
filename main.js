const player1 = prompt("Welcome, what is your name?");
const player2 = prompt("Welcome player 2, what is your name?");

console.log(`Welcome ${player1}, and ${player2} Let's play war!`);

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

let player1Cards = [];
let player2Cards = [];

let player1Card = player1Hand.pop();
let player2Card = player2Hand.pop();
let i = 100;

while (player1Hand.length > 0 || player2Hand.length > 0) {
  if (player1Card.value === player2Card.value) {
    let player1NewCard = player1Hand.pop();
    let player2NewCard = player2Hand.pop();
    let player1WarChest = player1Hand.splice(0, 3);
    let player2WarChest = player2Hand.splice(0, 3);

  if (player1NewCard.value > player2NewCard.value) {
    player1WarChest.forEach((item) => {
      console.log(item);
      player1Hand.unshift(item);
    });

    player2WarChest.forEach((item) => {
      console.log(item);
      player1Hand.unshift(item);
    });
    player1Hand.unshift(player1Card, player2Card, player1NewCard, player2NewCard);

    console.log(player1Hand.length + player2Hand.length);
  } else {
    player1WarChest.forEach((item) => {
      console.log(item);
      player2Hand.unshift(item);
    });

    player2WarChest.forEach((item) => {
      console.log(item);
      player2Hand.unshift(item);
    });
    player2Hand.unshift(player1Card, player2Card, player1NewCard, player2NewCard);
    console.log(player1Hand.length + player2Hand.length);
  }
  console.log(player1Hand.length + player2Hand.length);
  } else if (player1Card.value > player2Card.value) {
    console.log(`${player1} won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);

    player1Hand.unshift(player1Card, player2Card);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  } else if(player1Card.value < player2Card.value){
    console.log(`${player2} won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);

    player2Hand.unshift(player2Card, player2Card);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  }
  
    player1Card = player1Hand.pop();
    player2Card = player2Hand.pop();

}
