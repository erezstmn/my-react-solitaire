import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile7 = (props) =>{
    return (
        <div className="pile7">
            <h5>Pile7</h5>
            {props.Pile7.map((card) => {
                if (props.Pile7.indexOf(card) === props.Pile7.length -1 ){
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
        Pile7: state.piles[6]
    }
}
export default connect(mapStateToProps)(Pile7);