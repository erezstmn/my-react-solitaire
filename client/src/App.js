import React, { Component } from 'react';
import './App.css';
import {initDeck, dealDeck, revealThreeCards} from './actions/actionsCreators';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Table from './components/Table';


const store = configureStore();
  store.dispatch(initDeck());
  store.dispatch(dealDeck());

class App extends Component {  
  handleClick(){
    store.dispatch(initDeck());
    store.dispatch(dealDeck());      
  }
  handleRevealCards(){
    store.dispatch(revealThreeCards());   
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Table />
        <button onClick={this.handleClick}>New Game</button>
        <button onClick={this.handleRevealCards}>Show 3 cards</button>         
      </div>
      </Provider>
    );
  }
}

export default App;
