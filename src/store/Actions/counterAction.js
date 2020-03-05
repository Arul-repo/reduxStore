import * as actionTypes from "./actionTypes";

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = (value) => {
    return {
        type: actionTypes.DECREMENT,
        val: value
    }
}

export const fiveminus = (value) => {
    return {
        type: actionTypes.FIVEMINUS,
        val: value
    }
}

export const fiveplus = (value) => {
    return {
        type: actionTypes.FIVEPLUS,
        val: value
    }
}
