import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import '../App.css';

const MainDeck = (props) => { 
      return(
            <div className="main_deck">
                <h2>MainDeck</h2>           
                {props.coveredCards.map((card) => {
                    return (
                        <Card key={card.suit + card.rank} rank={card.rank} suit={card.suit} isVisible={card.isVisible} isAccessible={card.isAccessible}/>
                    )})}            
                <p>visibleCards</p>               
                {props.visibleCards.map((card) => {
                    card.isVisible=true;
                    return (
                        <Card 
                            key={card.suit + card.rank} 
                            rank={card.rank} 
                            suit={card.suit} 
                            isVisible={card.isVisible} 
                            isAccessible={card.isAccessible}
                            parentPile='visibleCards'/>             
                    )})}               
                <p>usedCards</p>
                {props.usedCards.map((card) => {
                    card.isVisible=false;
                    return (
                        <Card key={card.suit + card.rank} rank={card.rank} suit={card.suit} isVisible={card.isVisible} isAccessible={card.isAccessible}/>
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



