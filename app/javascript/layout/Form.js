import React from 'react'
import { Row, Col, Form as FormComponent, Button } from 'react-bootstrap'

const Form = (props) => {

    return(
        <FormComponent onSubmit={props.handleSubmit} >
            <FormComponent.Group as={Row} className="mb-2" controlId="subscribeEmail">
                <FormComponent.Label column xs={{ span: 2, offset: 3 }} >
                    E-mail:
                </FormComponent.Label>
                <Col sm="4">
                    <FormComponent.Control onChange={props.handleChange} name="email" type="text" placeholder="nome@exemplo.com" />
                </Col>
            </FormComponent.Group>            
            <Row>
                <Col xs={{ span: 4, offset: 5 }}>
                    <Button type="submit">
                        Enviar
                    </Button>
                </Col>
            </Row>
        </FormComponent>
    )
}

export { Form }