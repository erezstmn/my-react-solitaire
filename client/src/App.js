import React, { Component } from 'react';
import './App.css';
import {initDeck, dealDeck, revealThreeCards} from './actions/actionsCreators';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(initDeck());
store.dispatch(dealDeck());
console.log(store.getState());
class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    store.dispatch(initDeck());
    store.dispatch(dealDeck());  
    console.log(store.getState());  
  }
  handleRevealCards(){
    store.dispatch(revealThreeCards());
    console.log(store.getState());
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>hit me</button>
        <button onClick={this.handleRevealCards}>Show 3 cards</button>
        <p></p>
      </div>
    );
  }
}

export default App;
