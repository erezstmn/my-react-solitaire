import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile1 = (props) =>{
    return (
        <div className="pile1">            
                <h5>Pile1</h5>           
            {props.Pile1.map((card) => {
                if (props.Pile1.indexOf(card) === props.Pile1.length -1 ){
                    card.isVisible = true;
                }
                return (                    
                    <li key={card.suit + card.rank}>{card.isVisible?card.suit + card.rank:'card'}</li>
                 );
            })}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Pile1: state.piles[0]
    }
}
export default connect(mapStateToProps)(Pile1);
