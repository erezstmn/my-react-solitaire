import React from 'react';
import Hearts from './foundations/Hearts';
import Clubs from './foundations/Clubs';
import Diamonds from './foundations/Diamonds';
import Spades from './foundations/Spades';
import '../App.css';

const Foundations  = () =>(
    <div className="foundations">
        <h3>Foundations</h3>
        <Hearts />
        <Clubs />
        <Diamonds />
        <Spades />
    </div>
    
);

export default Foundations;