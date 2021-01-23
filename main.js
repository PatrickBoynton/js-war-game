// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

function Card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function Deck() {
  this.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  this.cards = [];

  for (let s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
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

let cards = deck.cards;

shuffle(cards);

const player1Hand = cards.pop();
const player2Hand = cards.pop();

console.log(player1Hand, player2Hand);
