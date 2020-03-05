const intState = {
    counter: 0,
    results: []
}
const reducer = (state = intState, action) => {
    switch( action.type ){
        case "INCREMENT":
            const stateValue = Object.assign({}, state);
            stateValue.counter = state.counter + 1;
            return stateValue; 
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - action.value
            }
        case "FIVEPLUS":
            return {
                ...state,
                counter: state.counter + action.value
            }
        case "FIVEMINUS":
            return {
                ...state,
                counter: state.counter - action.value
            }
        case "STORE_RESULT":
            return {
                ...state,
                results: state.results.concat({id:new Date(), value: state.counter})
            }
        case "DELETE_RESULT":
            let updateArr = state.results.filter( result => {
                return result.id !== action.value; 
            });
            return {
                ...state,
                results: updateArr
            }
    }
    return state;
    /* if(action.type === "INCREMENT"){
        return {
            counter: state.counter + action.value
        }
    }
    if(action.type === "FIVEPLUS"){
        return {
            counter: state.counter + action.value
        }
    }
    if(action.type === "DECREMENT" && state.counter > 0){
        return {
            counter: state.counter - action.value
        }
    }
    if(action.type === "FIVEMINUS" && state.counter > 4){
        return {
            counter: state.counter - action.value
        }
    } */

}

export default reducer;