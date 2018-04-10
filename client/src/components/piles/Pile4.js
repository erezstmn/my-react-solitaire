import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile4 = (props) =>{
    return (
        <div className="pile4">
            <h5>Pile4</h5>
            {props.Pile4.map((card) => {
                if (props.Pile4.indexOf(card) === props.Pile4.length -1 ){
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
        Pile4: state.piles[3]
    }
}
export default connect(mapStateToProps)(Pile4);