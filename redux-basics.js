//Redux
const redux = require('redux');
const createStore = redux.createStore;
//state
const intState = {
    name: "redux",
    counter: 1
}
//Reducer
const rootReducer = (state = intState, action) =>{
    if(action.type === "INC_COUNTER"){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === "ADD_COUNTER"){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}
//Store
const store = createStore(rootReducer);
/* console.log(store.getState()); */
//Subscription
store.subscribe(() => {
     console.log('subscrition action', store.getState());
});

//Dispatch and Action
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 20});

