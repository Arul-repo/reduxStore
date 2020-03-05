import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import counter from "../src/store/Reducer/counter";
import result from "../src/store/Reducer/result";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mergeReducer = combineReducers({
    ctr: counter,
    rst: result
});
//middleware reduxThunk
const logger = store => {
    return next => {
        return action => {
            console.log('Middleware [Dispatching]', action);
            const result = next(action);
            console.log('Middleware [action]', store.getState());
            return result;
        }
    }
}
const store = createStore(mergeReducer, applyMiddleware(logger, reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
