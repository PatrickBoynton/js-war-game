// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

function Deck() {
    this.hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    this.diamonds = [...this.hearts],
    this.spades = [...this.hearts],
    this.clubs = [...this.hearts]
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

let deck = new Deck();
const cards = [...deck.hearts, ...deck.diamonds, ...deck.spades, ...deck.clubs];

shuffle(cards);

const hand1 = cards.splice(0, 26);
const hand2 = cards.splice(0, 26);

const player1 = new Player(hand1, "Patrick");
const player2 = new Player(hand2, "Chad");

console.log(player1.hand.pop() > player2.hand.pop());
