export function messageAction(messages) {

    return(dispatch) => {
        dispatch({
            type: "message",
            payload: messages
        })
    }
}