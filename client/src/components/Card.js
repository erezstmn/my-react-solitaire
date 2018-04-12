import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {compose} from 'redux';
import {connect} from 'react-redux';
import getCardNotation from '../utils/getCardNotation';
import '../App.css';

class Card extends Component{
    
    render(){          
        let cardNotation = getCardNotation(this.props);      
        return this.props.connectDragSource (            
            <img 
            alt="" 
            width="90px" 
            style={this.props.style}
            src={this.props.isVisible ? (require(`../Images/${cardNotation}.jpg`)) : require('../Images/Gray_back.jpg')}/>
        )
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };

}



const spec = {
    canDrag(props){
        return props.isAccessible
    },
    beginDrag(props, monitor, component){
        let piles = component.store.getState().piles;
        let currentPileIndex = parseInt(props.parentPile.slice(-1),10)-1;  
        const findCard = (card)=>{          
            if (card.rank === props.rank && card.suit === props.suit){
                return card
            }        
        } 
        let linkedCards =[];   
        if (!isNaN(currentPileIndex)){
            let indexOfDraggedCard =piles[currentPileIndex].findIndex(findCard); 
            while (indexOfDraggedCard<piles[currentPileIndex].length-1){                
                linkedCards.push(piles[currentPileIndex][indexOfDraggedCard+1])
                indexOfDraggedCard++;
            }
        }
        return {
            suit: props.suit,
            rank: props.rank,
            isVisible: props.isVisible,
            isAccessible: props.isAccessible,
            parentPile: props.parentPile,
            linkedCards
        }
    },
    endDrag(props, monitor, component){
        if (monitor.didDrop()){  

         }       
        return;
    }
    
}

const mapStateToProps = (state) =>{
    return {
        piles:state.piles
    }
}
export default compose(
    DragSource('card', spec, collect),
    connect(mapStateToProps))(Card);
