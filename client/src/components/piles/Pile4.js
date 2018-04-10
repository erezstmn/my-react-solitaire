import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile4 = (props) =>{
    return (
        <div className="pile4">
            <h5>Pile4</h5>
            {props.Pile4.map((card) => {
                return (
                    <li key={card.suit + card.rank}>{card.suit + card.rank}</li>
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