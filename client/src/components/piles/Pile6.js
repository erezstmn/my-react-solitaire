import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile6 = (props) =>{
    return (
        <div className="pile6">
            <h5>Pile6</h5>
            {props.Pile6.map((card) => {
                if (props.Pile6.indexOf(card) === props.Pile6.length -1 ){
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
        Pile6: state.piles[5]
    }
}
export default connect(mapStateToProps)(Pile6);