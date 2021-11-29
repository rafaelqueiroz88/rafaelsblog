import React from 'react'
import { Button as ButtonComponent } from 'react-bootstrap'

/**
 * 
 * @param { variant = "primary", href = null, icon = null, text = null, type = "button", action = null }
 * @returns Component
 */
function Button ({variant = "primary", href = null, icon = null, text = null, type = "button", action = null}) {
    return(
        <ButtonComponent
            variant={variant} 
            href={href}
            type={type} 
            onClick={action} >

            { icon != null ? <i className={icon}></i> : '' } { text != null ? text : '' }
        </ButtonComponent>
    )
}

export default Button