import * as actionTypes from "../Actions/actionTypes";
import { utilityObject } from "../../utility/utility";

const intState = {
    results: []
}

const resultConcat = (state, value) => {
    return state.results.concat({id:new Date(), value: value});
}
const reducer = (state = intState, action) => {
    switch( action.type ){
        case actionTypes.STORE_RESULT:
            return utilityObject(state, resultConcat(state, action.val));
        case actionTypes.DELETE_RESULT:
            let updateArr = state.results.filter( result => {
                return result.id !== action.val; 
            });
            return {
                ...state,
                results: updateArr
            }
    }
    return state;
}

export default reducer;