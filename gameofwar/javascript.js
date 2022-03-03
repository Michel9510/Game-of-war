class Deck {
  constructor() {
    this.deck = []
    const suit = ['hearts', 'spades', 'clubs', 'diamonds'] //symbol of the cards
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'king', 'Ace',]
    for (let i of suit) {
      for (let j of rank) {
        this.deck.push([j, i])
      }
    }
  }
}

deckOne = new Deck()
// randomize both decks for player 1 and 2
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
// loop for player 1, if player one deck is greater than player 2 = win
beGame = () => {
  while (decks.playerOne.length > 0 && decks.playerTwo.length > 0) {
    if (decks.playerOne[0][0][0] <= decks.playerTwo[0][0][0]) {
      decks.playerOne.push(decks.playerTwo[0], decks.playerOne[0])
      decks.playerOne.shift()
      decks.playerTwo.shift()
    } // loop for player 2, if player two deck is greater than player 1 = win
    else if (desks,playerOne.length < desks.playertwo.length > 0) {
      (decks.playerOne[0][0][0] < decks.playerTwo[0][0][0]) 
      decks.playerTwo.push(decks.playerOne[0], decks.playerTwo[0])
      decks.playerOne.shift()
      decks.playerTwo.shift()
    }
    else { // loop if both players have the same number = war
      if (decks.playerOne.length > 2 && decks.playerTwo.length > 2) {
        war = (i = 2) => {
          console.log("war")
          if (decks.playerOne[i][0][0] > decks.playerTwo[i][0][0]) {
            for (let j = 0; j <= i; j++) {
              decks.playerOne.push(decks.playerOne[j], decks.playerTwo[j])
              decks.playerOne.shift()
              decks.playerTwo.shift()
            }
          }
          else if (decks.playerOne[i][0][0] < decks.playerTwo[i][0][0]) {
            for (j = 0; j <= i; j++) {
              decks.playerTwo.push(decks.playerOne[j], decks.playerTwo[j])
              decks.playerOne.shift()
              decks.playerTwo.shift()
            }
          }
          else {
            war(i += 2)
          }
        }
      }
      else { // if player one deck is greater than player 2 print P1 win.
        if (decks.playerOne.length > decks.playerTwo.length) {
          console.log("Player 1 wins")
          break
        }
        else { // if p2 deck is greater than p1 print p2 win.
          if (decks.playerone.length < decks.playerTwo.length) {
            console.log("Player 2 wins")
            break
          }
        }
      }
      war()
    }

    console.log(`player 1: ${decks.playerOne.length} player 2: ${decks.playerTwo.length}`)
  }
}

beGame()
