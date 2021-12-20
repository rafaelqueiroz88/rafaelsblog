import React from 'react'

const Message = (props) => {

    console.log(props)

    return(<div>
        { props.attributes.message }
    </div>)
}

export default Message