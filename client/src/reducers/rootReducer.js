import getShuffeledDeck from '../utils/getShuffeledDeck';

const defaultState = 
    {      
        piles:[[],[],[],[],[],[],[]
        ],
        foundations:{ hearts:[], diamonds:[], clubs :[], spades: []
        },
        mainDeck:{
            coveredCards:[],
            visibleCards:[],
            usedCards:[]
        }      
    };

const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'INIT_DECK':
            const deck = getShuffeledDeck();
            return {
                piles:[[],[],[],[],[],[],[]
                ],
                foundations:{ hearts:[], diamonds:[], clubs :[], spades: []
                },
                mainDeck:{
                    coveredCards:deck,
                    visibleCards:[],
                    usedCards:[]
                }            
            };
            
        case 'DEAL_DECK': {          
            let coveredCards = state.mainDeck.coveredCards;
            let piles = [[],[],[],[],[],[],[]];
            for (let i = 0; i < 7; i++){
                let x = i;
                while(x>-1){
                    let card = coveredCards.pop();
                    piles[i].push(card);
                    x--;
                }
            }
            return {
                ...state,
                piles,
                mainDeck:{
                    coveredCards,
                    visibleCards:[],
                    usedCards:[]
                }              

            };
        }        
        case 'REAVEAL_THREE_CARDS':{            
            let coveredCards = state.mainDeck.coveredCards.map((card) => card);
            let visibleCards = state.mainDeck.visibleCards.map((card) => card);
            let usedCards = state.mainDeck.usedCards.map((card) => card);            
            if (coveredCards.length===0){
                let length = usedCards.length;
                for (let i =0 ;i<length; i++){
                    let card = usedCards.shift();
                    coveredCards.push(card);
                }
                length = visibleCards.length;
                for (let i =0 ;i<length; i++){
                    let card = visibleCards.shift();
                    coveredCards.push(card);
                }
                coveredCards.forEach((card) => {
                    card.isVisible=false;
                    card.isAccessible=false;
                })                 
                return {
                    ...state,
                    mainDeck:{                    
                        coveredCards,
                        visibleCards,
                        usedCards
                    }   
    
                };
            }
            if (visibleCards.length>0){                
                for (let i = 0; i<3 && visibleCards.length>0; i++){
                let card = visibleCards.shift();
                usedCards.push(card);
                }
            }
            for (let i = 0; i<3 && coveredCards.length>0; i++){
                let card = coveredCards.shift();
                visibleCards.push(card);
            }
            visibleCards[visibleCards.length-1].isAccessible = true; 
            coveredCards.forEach((card) => {
                card.isVisible=false;
                card.isAccessible=false;
            })          
            return {
                ...state,
                mainDeck:{                    
                    coveredCards,
                    visibleCards,
                    usedCards
                }   

            };
        }
        case 'ADD_CARD_TO_FOUNDATION':{
            let piles = state.piles.map((pile) => pile);
            let coveredCards = state.mainDeck.coveredCards.map((card) => card);
            let visibleCards = state.mainDeck.visibleCards.map((card) => card);
            let usedCards = state.mainDeck.usedCards.map((card) => card); 
            let foundations = {
                clubs : state.foundations.clubs.map((card) => card),
                diamonds : state.foundations.diamonds.map((card) => card),
                hearts : state.foundations.hearts.map((card) => card),
                spades : state.foundations.spades.map((card) => card)
            } 
             if (action.card.suit!==action.foundationSuit  || action.card.rank-1 !==foundations[action.foundationSuit].length){
                    return state;
            }
            foundations[action.foundationSuit].push(action.card);
            if (action.card.parentPile==='visibleCards'){
                visibleCards.pop();
                if (visibleCards.length>0){
                    visibleCards[visibleCards.length-1].isAccessible = true;
                }
            }else{                
                let pileNumber = parseInt(action.card.parentPile.slice(-1),10);  
                piles[pileNumber-1].pop();  
            }      
            return {
                ...state,
                piles,
                foundations, 
                mainDeck:{
                    coveredCards,
                    visibleCards,
                    usedCards
                }   
            }
        }
        case 'ADD_CARD_TO_PILE':{
            let piles = state.piles.map((pile) => pile);
            let pileNumber = parseInt(action.card.parentPile.slice(-1),10);
            let coveredCards = state.mainDeck.coveredCards.map((card) => card);
            let visibleCards = state.mainDeck.visibleCards.map((card) => card);
            let usedCards = state.mainDeck.usedCards.map((card) => card); 
            if ((piles[action.pileIndex].length===0) && action.card.rank===13){
                piles[action.pileIndex].push(action.card);
                if (action.card.linkedCards.length!==0){                   
                    piles[action.pileIndex] = piles[action.pileIndex].concat(action.card.linkedCards);
                }
                if (action.card.parentPile==='visibleCards'){
                    visibleCards.pop();
                    visibleCards[visibleCards.length-1].isAccessible = true;
                }else{
                    piles[pileNumber-1].pop();
                    let numOfLinkedCards = action.card.linkedCards.length;
                    while(numOfLinkedCards>0){
                        piles[pileNumber-1].pop();
                        numOfLinkedCards--;
                    }
                }
            }  
            let lastCardInPile = piles[action.pileIndex][piles[action.pileIndex].length-1];
            let targetCardcolor = lastCardInPile.suit === 'diamonds' || lastCardInPile.suit === 'hearts' ? 'red' : 'black';
            let actionCardColor = action.card.suit === 'diamonds' || action.card.suit === 'hearts' ? 'red' : 'black';
            if ((targetCardcolor!==actionCardColor) && 
                (lastCardInPile.rank-1===action.card.rank)){
                    piles[action.pileIndex].push(action.card);
                    if (action.card.linkedCards.length!==0){                       
                        piles[action.pileIndex] = piles[action.pileIndex].concat(action.card.linkedCards);
                    }
                    if (action.card.parentPile==='visibleCards'){
                        visibleCards.pop();
                        if (visibleCards.length>0){
                            visibleCards[visibleCards.length-1].isAccessible = true;
                        }
                    }else{
                        piles[pileNumber-1].pop();
                        let numOfLinkedCards = action.card.linkedCards.length;
                    while(numOfLinkedCards>0){
                        piles[pileNumber-1].pop();
                        numOfLinkedCards--;
                    }
                    }
            }
            return {
                ...state,
                piles,
                mainDeck:{
                    coveredCards,
                    visibleCards,
                    usedCards
                }   
            }
        }
        default:
            return state;
    } 
};

export default rootReducer;