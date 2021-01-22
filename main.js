// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

function Deck() {
    this.hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, {11:"J"}, {12:"Q"}, {13:"K"}],
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

const player1Card = hand1.pop();
const player2Card = hand2.pop();


if (player1Card === player2Card) {
  console.log("War were declared!", player1Card, player2Card);
} else if (player1Card > player2Card) {
  console.log("Player 1 gets both cards", player1Card, player2Card);
} else {
  console.log("player 2 gets both cards", player1Card, player2Card);
}
