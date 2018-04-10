import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile3 = (props) =>{
    return (
        <div className="pile3">
            <h5>Pile3</h5>
            {props.Pile3.map((card) => {
                if (props.Pile3.indexOf(card) === props.Pile3.length -1 ){
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
        Pile3: state.piles[2]
    }
}
export default connect(mapStateToProps)(Pile3);