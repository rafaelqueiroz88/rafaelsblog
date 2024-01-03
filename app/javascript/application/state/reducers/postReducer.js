const postReducer = (state = {}, action) => {

    switch(action.type) {
        case "publish":
            return {...state, post: action.post}
        case "unpublish":
            return {...state, post: action.post}
        default:
            return state
    }
}

export default postReducer