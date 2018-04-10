import React from 'react';
import Pile1 from './piles/Pile1';
import Pile2 from './piles/Pile2';
import Pile3 from './piles/Pile3';
import Pile4 from './piles/Pile4';
import Pile5 from './piles/Pile5';
import Pile6 from './piles/Pile6';
import Pile7 from './piles/Pile7';


const Piles = (props) => {
    
    return (
        <div className="piles">
            <h2>Piles</h2>
            <Pile1 />
            <Pile2 />
            <Pile3 />
            <Pile4 />
            <Pile5 />
            <Pile6 />
            <Pile7 />            
        </div>
    )
}

export default Piles;

