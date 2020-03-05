import * as actionTypes from "./actionTypes";

const resultFn = (value) => {
    return{
        type: actionTypes.STORE_RESULT,
        val: value
    }
}

export const store_result = (count) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(resultFn(count));
        }, 2000);
    }
    /* return{
        type: actionTypes.STORE_RESULT,
        val: count
    } */
}
export const delete_result = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        val: value
    }
}