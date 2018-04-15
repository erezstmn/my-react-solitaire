import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import '../App.css';
import {revealThreeCards} from '../actions/actionsCreators';

const MainDeck = (props) => { 
    // const myFunc = () => {
    //     console.log(props);
    // };    
    const handleRevealCards = () => {
        props.dispatch(revealThreeCards());   
      }
      const fieldSetDimensions = {
        height:'113px',
        width:'60px'
    }
    return(
            <div className="main_deck">                                         
                <fieldset onClick={handleRevealCards} style={fieldSetDimensions}/>
                {props.coveredCards.map((card,index) => {
                    let cardToRightBy = 5 * index;
                    cardToRightBy +='px';
                    let cardStyle ={
                        position:'absolute',
                        top:'-5px',
                        left:cardToRightBy                        
                    }                   
                    return (
                        <Card 
                            style={cardStyle}
                            key={card.suit + card.rank} 
                            rank={card.rank} 
                            suit={card.suit} 
                            isVisible={card.isVisible} 
                            isAccessible={card.isAccessible}
                            onClick={index===props.coveredCards.length-1 ? handleRevealCards : null }                           
                            />
                            
                    )})} 
                             
                  
                  <div className="visible_cards">
                {props.visibleCards.map((card,index) => {
                    let cardToRightBy = 10 * index;
                    cardToRightBy +='px';
                    let cardStyle ={
                        position:'absolute',
                        left:cardToRightBy                        
                    }
                    card.isVisible=true;                                                        
                    return (
                        <Card                             
                            style={cardStyle}
                            key={card.suit + card.rank} 
                            rank={card.rank} 
                            suit={card.suit} 
                            isVisible={card.isVisible} 
                            isAccessible={card.isAccessible}
                            parentPile='visibleCards'/>             
                    )})}  
                    </div> 
                    
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



