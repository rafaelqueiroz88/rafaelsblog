import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from './state/index'

import Card from './components/Card'

const Posts = () => {

    const [posts, setPosts] = useState([])

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const { unpublishPostAction } = bindActionCreators(actionCreators, dispatch)

    const handleDelete = (params) => e => {
        e.preventDefault()
        axios.delete(`/api/v1/posts/${params}`)
            .then(r => {
                unpublishPostAction(cards)
                let card = cards.filter(item => item.props.attributes.slug !== params)
                setPosts({card})
            })
            .catch(r => {
                console.log(r)
            })
    }

    useEffect(() => {
        axios.get('/api/v1/posts.json')
            .then(response => {
                setPosts(response.data)
            })
            .catch(response => {
                console.log(response)
            })
    }, [posts.length])

    let cards
    if(posts.length > 0) {
        cards = posts.map( post => {

            return(
                <Card key={post.slug} attributes={post} handleDelete={handleDelete} />
            )
        })
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Aqueles tutoriais quentinhos...</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    No momento temos { posts.length } disponíveis para visualização
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Button variant="primary" href='/publicacoes/nova'>
                        <i className="fas fa-plus"></i> Escrever
                    </Button>
                </Col>
            </Row>
            <Row>
                {
                    cards == null ?
                    <Col>Não temos nada disponível para leitura no momento :(</Col> :
                    cards
                }
            </Row>
        </Container>
    )
}

export default Posts