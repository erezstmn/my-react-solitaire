import React, { Component } from 'react';
import './App.css';
import {initDeck, dealDeck, revealThreeCards} from './actions/actionsCreators';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import MainDeck from './components/MainDeck';
import Foundations from './components/Foundations';


const store = configureStore();
store.dispatch(initDeck());
store.dispatch(dealDeck());
class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
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
        <button onClick={this.handleClick}>hit me</button>
        <button onClick={this.handleRevealCards}>Show 3 cards</button>
        <MainDeck/>
        <Foundations />
        <p></p>
      </div>
      </Provider>
    );
  }
}

export default App;
