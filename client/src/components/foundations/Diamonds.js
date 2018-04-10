import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Diamonds  = (props) =>{
        return (
        <div className="diamonds">
            <h5>Diamonds</h5>
            {props.diamonds.length}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        diamonds: state.foundations.diamonds
    };
}

export default connect(mapStateToProps)(Diamonds);