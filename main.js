// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

function Deck() {
    this.hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    this.diamonds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    this.spades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    this.clubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
}

let deck = new Deck();
const cards = [...deck.hearts, ...deck.diamonds, ...deck.spades, ...deck.clubs];

function shuffle(array) {
  // reverses the sort.
  // array.sort(() => Math.random() - 1);
}
