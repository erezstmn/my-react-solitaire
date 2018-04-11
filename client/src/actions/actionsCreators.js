export const initDeck = () => {   
    return {
        type:'INIT_DECK',      
    };
};
export const dealDeck = () => {    
    return {
        type:'DEAL_DECK'
    };
}
export const revealThreeCards = () => {
    return{
        type:'REAVEAL_THREE_CARDS'
    };
}
export const addCardToFoundation = (card, foundationSuit) => {
    return{
        type: 'ADD_CARD_TO_FOUNDATION',
        card,
        foundationSuit
    };
}

export const addCardToPile = (card) => {
    return{
        type: 'ADD_CARD_TO_PILE'
    };
}


