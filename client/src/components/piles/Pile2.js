import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Pile2 = (props) =>{
    return (
        <div className="pile2">
            <h5>Pile2</h5>
            {props.Pile2.map((card) => {
                if (props.Pile2.indexOf(card) === props.Pile2.length -1 ){
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
        Pile2: state.piles[1]
    }
}
export default connect(mapStateToProps)(Pile2);