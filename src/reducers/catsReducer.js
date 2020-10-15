// add the catsReducer

const catsReducer = (state = {cats: [], loading: false}, action) => {
    if (action.type === 'LOADING_CATS') {
        return {
            ...state,
            cats: [...state.cats],
            loading: true
        }
    } else if (action.type === 'ADD_CATS') {
        return {
            ...state,
            cats: action.cats,
            loading: false
        }
    } else {
        return state
    }
}

export default catsReducer