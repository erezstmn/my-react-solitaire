import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Clubs  = (props) => {    
    return (
        <div className="clubs">
            <h5>Clubs</h5>
            {props.clubs.length}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        clubs: state.foundations.clubs
    };    
};

export default connect(mapStateToProps)(Clubs);