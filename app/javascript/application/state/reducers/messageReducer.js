const messageReducer = (state = {}, action) => {

    switch(action.type) {
        case 'message':
            return {
                ...state, 
                messages: action.message, 
            }
        default:
            return state
    }
}

export default messageReducer