import * as actionTypes from "../Actions/actionTypes";
import { utilityObject } from "../../utility/utility";

const intState = {
    counter: 0
}

const incFunc = (state, action) => {
    const stateValue = Object.assign({}, state);
    stateValue.counter = state.counter + 1;
    return stateValue; 
}
const counter = (state = intState, action) => {

    switch( action.type ){
        case actionTypes.INCREMENT:
            return incFunc(state, action);
        case actionTypes.DECREMENT:
            return utilityObject(state, {counter: state.counter - action.val})
        case actionTypes.FIVEPLUS:
            return utilityObject(state, {counter: state.counter + action.val})
        case actionTypes.FIVEMINUS:
            return utilityObject(state, {counter: state.counter - action.val})
    }
    return state;
}

export default counter;