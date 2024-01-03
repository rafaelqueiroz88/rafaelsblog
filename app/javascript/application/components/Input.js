import React from 'react'
import { Row, Col, Form as FormComponent } from 'react-bootstrap'

/**
 * @param { label, labelColumn, inputColumn, controlId, name, action, inputValue, placeholder = "" }
 * @returns Component
 */
function Input ({label, labelColumn, inputColumn, controlId, name, action, inputValue, placeholder}) {

    return(
        <FormComponent.Group as={Row} controlId={controlId}>
            <FormComponent.Label column sm={labelColumn}>
                { label }
            </FormComponent.Label>
            <Col sm={inputColumn}>
                <FormComponent.Control name={name} onChange={action} value={inputValue === undefined ? '' : inputValue} placeholder={placeholder} />
            </Col>
        </FormComponent.Group>
    )
}

export default Input