class Deck {
  constructor() {
    this.deck = []
    const suit = ['hearts', 'spades', 'clubs', 'diamonds']
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'king', 'Ace',]
    for (let i of suit) {
      for (let j of rank) {
        this.deck.push([j, i])
      }
    }
  }
}

deckOne = new Deck()

class Deal {
  constructor() {
    this.playerOne = []
    this.playerTwo = []

    for (let i = 0; i < 52; i++) {
      let ramdoIndex = deckOne.deck.splice([Math.random() * (deckOne.deck.length - 1)], 1)
      if (i % 2 === 0) {
        this.playerTwo.push(ramdoIndex)
      }
      else {
        this.playerOne.push(ramdoIndex)
      }
    }
  }
}

decks = new Deal()

beGame = () => {
  while (decks.playerOne.length > 0 && decks.playerTwo.length > 0) {
    if (decks.playerOne[0][0][0] < decks.playerTwo[0][0][0]) {
      decks.playerOne.push(decks.playerTwo[0], decks.playerOne[0])
      decks.playerOne.shift()
      decks.playerTwo.shift()
    }
  }
}  