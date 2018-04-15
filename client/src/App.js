import React, { Component } from 'react';
import './App.css';
import {initDeck, dealDeck} from './actions/actionsCreators';
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

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Table />
        <button onClick={this.handleClick}>Deal!</button>           
      </div>
      </Provider>
    );
  }
}

export default App;
