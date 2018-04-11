
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.isVisible = false;
    this.isAccessible = false;
}
const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}
const getShuffeledDeck = ()  =>  {
    let deck =[];
    const suits = ["clubs","diamonds", "hearts", "spades"];
    for (let i = 0 ; i < 4; i++){
        for (let j = 1 ; j < 14 ; j++){
            let card = new Card(suits[i],j);
            deck.push(card);
        }
    } 
    shuffleDeck(deck);
    return deck;
}
export default getShuffeledDeck;




