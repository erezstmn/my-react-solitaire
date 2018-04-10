import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile5 = (props) =>{
    return (
        <div className="pile5">
            <h5>Pile5</h5>
            {props.Pile5.map((card) => {
                return (
                    <li key={card.suit + card.rank}>{card.suit + card.rank}</li>
                );
            })}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Pile5: state.piles[4]
    }
}
export default connect(mapStateToProps)(Pile5);