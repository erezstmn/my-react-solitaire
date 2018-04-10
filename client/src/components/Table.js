import React,{Component} from 'react';
import '../App.css';
import Foundations from './Foundations';
import Piles from './Piles';
import MainDeck from './MainDeck';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Table extends Component {

    render() {
        return(
            <div className="table">Table
                <Foundations />
                <Piles />
                <MainDeck />               
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(Table);