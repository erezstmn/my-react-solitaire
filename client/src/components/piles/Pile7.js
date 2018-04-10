import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile7 = (props) =>{
    return (
        <div className="pile7">
            <h5>Pile7</h5>
            {props.Pile7.map((card) => {
                return (
                    <li key={card.suit + card.rank}>{card.suit + card.rank}</li>
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