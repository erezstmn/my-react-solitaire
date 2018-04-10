import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

const Hearts  = (props) =>{
    return (
        <div className="hearts">
            <h5>Hearts</h5>
            {props.hearts.length}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        hearts: state.foundations.hearts
    }
}

export default connect(mapStateToProps)(Hearts);