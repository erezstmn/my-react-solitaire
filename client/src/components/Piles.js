import React from 'react';
import Pile from './Pile';
import '../App.css';


const Piles = (props) => {
    
    return (
        <div className="piles">
            <h2>Piles</h2>
            <Pile pileIndex='0'/>
            <Pile pileIndex='1'/>
            <Pile pileIndex='2'/>
            <Pile pileIndex='3'/>
            <Pile pileIndex='4'/>
            <Pile pileIndex='5'/>
            <Pile pileIndex='6'/>            
        </div>
    )
}

export default Piles;

