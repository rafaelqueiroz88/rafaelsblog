export const publishPostAction = (posts) => {
    return(dispatch) => {
        dispatch({
            type: "publish",
            payload: posts
        })
    }
}

export const unpublishPostAction = (posts) => {
    return(dispatch) => {
        dispatch({
            type: "unpublish",
            payload: posts
        })
    }
}