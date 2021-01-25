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

player1Cards.push(player1Card);
player2Cards.push(player2Card);

while (player1Hand.length > 0 || player2Hand.length > 0) {
  if (player1Card.value === player2Card.value) {
    console.log("War!");
    console.log(`Player 1 had: ${player1Card.value} of ${player1Card.suit}`);
    console.log(`Player 2 had: ${player2Card.value} of ${player2Card.suit}`);

    // const player1WarChest = player1Hand.splice(0, 3);
    // const player2WarChest = player2Hand.splice(0, 3);
    //
    // player1WarChest.forEach((item) => {
    //   player1Cards.push(item);
    // });
    //
    // player2WarChest.forEach((item) => {
    //   player2Cards.push(item);
    // });
    //
    // const player1NewCard = player1Hand.pop();
    // const player2NewCard = player2Hand.pop();
    
    console.log("-------------------------");
    console.log(`Player 1 had: ${player1NewCard.value} of ${player2NewCard.suit}`);
    console.log(`Player 2 had: ${player2NewCard.value} of ${player2NewCard.suit}`);

    if (player1NewCard.value === player2NewCard.value) {
      console.log("War again!");
      break;
    } else if(player1NewCard.value > player2NewCard.value) {

      player1Cards.forEach((item) => {
        player1Hand.unshift(item);
      });

      player2Cards.forEach((item) => {
        player1Hand.unshift(item);
      });
      player1Hand.unshift(player1NewCard, player2NewCard);
      player1Hand.unshift(player1Card, player2Cards);
      console.log(player1Hand.length);
      console.log(player2Hand.length);
      console.log(player1Hand.length + player2Hand.length);
    } else if(player1NewCard.value < player2NewCard.value) {
      player2Cards.forEach((item) => {
        player2Hand.unshift(item);
      });
      player1Cards.forEach((item) => {
        player2Hand.unshift(item);
      });
        player1Hand.unshift(player1NewCard, player2NewCard);
        player2Hand.unshift(player1Card, player2Cards);
      console.log(player1Hand.length + player2Hand.length);
    }

    console.log(player1Hand.length + player2Hand.length);
    break;
  } else if (player1Card.value > player2Card.value) {
    console.log(`Player 1 won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);
    const player1CardToRemove = player1Cards.splice(0, 1);
    const player2CardToRemove = player2Cards.splice(0, 1);

    player1Hand.unshift(player1CardToRemove, player2CardToRemove);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  } else if(player1Card.value < player2Card.value){
    console.log(`Player 2 won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);
    const player1CardToRemove = player1Cards.splice(0, 1);
    const player2CardToRemove = player2Cards.splice(0, 1);

    player2Hand.unshift(player1CardToRemove, player2CardToRemove);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  }
  player1Card = player1Hand.pop();
  player2Card = player2Hand.pop();

}
