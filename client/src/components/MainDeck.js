import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

const MainDeck = (props) => { 
      return(
            <div className="main_deck">
                <h2>MainDeck</h2>           
                {props.coveredCards.map((card) => {
                    return (
                        <li key={card.suit + card.rank}>{card.isVisible?card.suit + card.rank:'card'}</li>
                    )})}            
                <p>visibleCards</p>               
                {props.visibleCards.map((card) => {
                    card.isVisible=true;
                    return (
                        <li key={card.suit + card.rank}>{card.isVisible?card.suit + card.rank:'card'}</li>                   
                    )})}               
                <p>usedCards</p>
                {props.usedCards.map((card) => {
                    card.isVisible=false;
                    return (
                        <li key={card.suit + card.rank}>{card.isVisible?card.suit + card.rank:'card'}</li>
                    )
                })}
                
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        coveredCards: state.mainDeck.coveredCards,
        visibleCards: state.mainDeck.visibleCards,
        usedCards: state.mainDeck.usedCards
    };
}

export default connect(mapStateToProps)(MainDeck);



