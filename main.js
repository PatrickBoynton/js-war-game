// const input = prompt("Welcome, what is your name?");
//
// console.log(`Welcome ${input} Let's play war!`);

function Deck() {
    this.hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    this.diamonds = [...this.hearts],
    this.spades = [...this.hearts],
    this.clubs = [...this.hearts]
}

let deck = new Deck();
const cards = [...deck.hearts, ...deck.diamonds, ...deck.spades, ...deck.clubs];

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


console.log(shuffle(cards));
