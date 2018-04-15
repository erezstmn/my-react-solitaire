import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';


// export default () => {
//     const store = createStore(combineReducers({
//         root: rootReducer
//     }));
//     return store;
// };
export default () => {
    const store = createStore(rootReducer);
    return store;
};



