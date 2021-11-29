import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Form from './Form'

const Update = (props) => {

    const uri = props.match.params.slug
    const url = `/api/v1/posts/${uri}`

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Temos algo para atualizar hoje?</h2>
                </Col>
            </Row>
            <Form post={url} />
        </Container>
    )
}

export { Update }