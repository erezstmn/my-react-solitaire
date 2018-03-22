import {createStore, combineReducers} from 'redux';
import rootReducer from '../reducers/rootReducer';

export default () => {
    const store = createStore(
        combineReducers({
            root: rootReducer
        })
    );
    return store;
};



