import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile6 = (props) =>{
    return (
        <div className="pile6">
            <h5>Pile6</h5>
            {props.Pile6.map((card) => {
                return (
                    <li key={card.suit + card.rank}>{card.suit + card.rank}</li>
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