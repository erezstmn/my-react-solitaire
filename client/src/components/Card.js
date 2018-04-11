import React, {Component} from 'react';
import {DragSource} from 'react-dnd';

class Card extends Component{
    
    render(){          
        return this.props.connectDragSource (<li>{this.props.isVisible?this.props.suit + this.props.rank : 'card'}</li>)
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
        
        return {
            suit: props.suit,
            rank: props.rank,
            parentPile: props.parentPile
        }
    },
    endDrag(props, monitor, component){
        if (monitor.didDrop()){  

         }       
        return;
    }
    
}

export default DragSource('card', spec, collect)(Card)
