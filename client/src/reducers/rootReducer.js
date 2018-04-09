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
                    let card = usedCards.pop();
                    coveredCards.push(card);
                }
                length = visibleCards.length;
                for (let i =0 ;i<length; i++){
                    let card = visibleCards.pop();
                    coveredCards.push(card);
                }
            }
            if (visibleCards.length>0){                
                for (let i = 0; i<3 && visibleCards.length>0; i++){
                let card = visibleCards.shift();
                usedCards.push(card);
                }
            }
            for (let i = 0; i<3 && coveredCards.length>0; i++){
                let card = coveredCards.pop();
                visibleCards.push(card);
            }           
            return {
                ...state,
                mainDeck:{                    
                    coveredCards,
                    visibleCards,
                    usedCards
                }   

            };
        }
            
        default:
            return state;
    } 
};

export default rootReducer;