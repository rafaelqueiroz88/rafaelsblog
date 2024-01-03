import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Form from './Form'

const New = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Qual a novidade que você quer contar?</h2>
                </Col>
            </Row>
            <Form />
        </Container>
    )
}

export { New }