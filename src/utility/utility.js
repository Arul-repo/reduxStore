export const utilityObject = (state, action) => {
    return{
        ...state,
        ...action,
        results: action
    }
}