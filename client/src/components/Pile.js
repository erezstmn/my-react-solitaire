import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DropTarget } from 'react-dnd';
import {compose} from 'redux';
import Card from './Card';
import '../App.css';
import {addCardToPile} from '../actions/actionsCreators'


class Pile extends Component {       
        render(){
            let pileName ="pile"+(parseInt(this.props.pileIndex,10)+1);   
        return this.props.connectDropTarget(        
            <div className={pileName}>            
                    <h5>Pile</h5>           
                {this.props.Piles[this.props.pileIndex].map((card) => {
                    if (this.props.Piles[this.props.pileIndex].indexOf(card) === this.props.Piles[this.props.pileIndex].length -1 ){
                        card.isVisible = true;
                        card.isAccessible= true;
                    }
                    return (                    
                        <Card 
                            key={card.suit + card.rank} 
                            rank={card.rank} suit={card.suit} 
                            isVisible={card.isVisible}
                            isAccessible={card.isAccessible}
                            parentPile={pileName}
                            />
                        );
                     })}            
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        Piles: state.piles
    }
}
const spec = {
    canDrop(props, monitor){
        return true;
    },
    hover(props,monitor,component){       

    },
    drop(props, monitor, component) {       
        console.log('test');
        component.store.dispatch(addCardToPile(monitor.getItem(),props.name));
        return {
            foundation: props.name
        }
    }
};
const collect = (connect, monitor) =>{
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        item:monitor.getItem(),
        didDrop: monitor.didDrop()

    }
};

export default compose(
    DropTarget('card', spec, collect),
    connect(mapStateToProps))(Pile);


