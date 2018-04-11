import React from 'react';
import Foundation from './Foundation';
import '../App.css';

const Foundations  = () =>(
    <div className="foundations">
        <h3>Foundations</h3>        
        <Foundation name="hearts"/>
        <Foundation name="clubs"/>
        <Foundation name="diamonds"/>
        <Foundation name="spades"/>
    </div>
    
);

export default Foundations;