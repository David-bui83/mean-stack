class Card{
  constructor(suit,strValue,numValue){
    this.suit = suit;
    this.strValue = strValue;
    this.numValue = numValue;
  }
  show(){
    return `${this.strValue} of ${this.suit}`;
  }
}
class Deck{
  constructor(){
    this.deck = []
    this.reset()
  }
  shuffle(){
    for(let i = 0; i < this.deck.length; i++){
      let shuf1 = Math.floor(Math.random() * 13)
      let temp = this.deck[shuf1];
      this.deck[shuf1] = this.deck[i];
      this.deck[i] = temp;
    }
  }
  reset(){
    const suit = ['Hearts','Clubs','Diamonds','Spades']
    const strVal = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']

    for(let i = 0; i < suit.length; i++){
      for(let j = 0; j < strVal.length; j++){
        const card = new Card(suit[i],strVal[j],j+1)
        this.deck.push(card)
      }
    }
  }
  deal(){
    this.shuffle()
    const card  = this.deck.pop()
    // console.log(`from deal: ${card.show()}`)
    return card
  }
  showDeck(){
    console.log(this.deck)
  }
}

class Player{
  constructor(name, deck){
    this.name = name;
    this.deck = deck;
    this.hand = [];
  }
  take(){
    this.hand.push(this.deck.deal())
  }
  discard(){
    this.hand.pop()
  }
}

const nDeck = new Deck();
nDeck.reset();
// nDeck.showDeck();
nDeck.shuffle();
console.log('*****************************************')
// nDeck.showDeck();
console.log(`dealt card: ${nDeck.deal().show()}`)
nDeck.showDeck();

const player = new Player('Alex', new Deck());

player.take();
console.log(`Player's hand: ${player.hand[0].show(0)}`)

