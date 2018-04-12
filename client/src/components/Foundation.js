import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DropTarget } from 'react-dnd';
import {compose} from 'redux';
import Card from './Card';
import '../App.css';
import {addCardToFoundation} from '../actions/actionsCreators';

class Foundation extends Component {   
    
    render(){
        const fieldSetDimensions = {
            width:'60px',
            height:'120px'

        }
        return this.props.connectDropTarget(
            <div className={this.props.name}>
                <fieldset style={fieldSetDimensions}>{this.props.name}</fieldset>                
                {this.props.foundations[this.props.name].map((card) => {
                    return (
                        <Card key={card.suit + card.rank} 
                        rank={card.rank} suit={card.suit} 
                        isVisible='true'
                        isAccessible={card.isAccessible}/>                        
                        
                    )
                })} 
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        foundations: state.foundations
    };    
};
const spec = {
    canDrop(props, monitor){
        return true;
    },
    hover(props,monitor,component){       

    },
    drop(props, monitor, component) {       
       
        component.store.dispatch(addCardToFoundation(monitor.getItem(),props.name));
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
        didDrop: monitor.didDrop(),


    }
};

export default compose(
    DropTarget('card', spec, collect),
    connect(mapStateToProps))(Foundation);
