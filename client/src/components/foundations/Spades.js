import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Spades  = (props) =>{
    return (
        <div className="spades">
            <h5>Spades</h5>
            {props.spades.length}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        spades: state.foundations.spades
    };
};

export default connect(mapStateToProps)(Spades);