import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { StyleSheet, css } from 'aphrodite'

import { AWS_S3 as S3 } from '../constants/constants'

const styles = StyleSheet.create({
    small: {
        '@media screen and (max-width: 360px)': {
            marginTop: '50px'
        }
    },
    cover: {
        '@media screen and (max-width: 360px)': {
            backgroundImage: 'linear-gradient(rgb(0, 0, 150), rgb(250, 250, 250))'
        },
        '@media screen and (min-width: 900px)': {
            backgroundImage: 'linear-gradient(rgb(70, 70, 70), rgb(250, 250, 250))'
        }
    }
})

const Img = styled.img`
    @media screen and (max-width: 360px) {
        width: 220px;
        min-height: 210px;
        max-height: 210px;
    }

    @media screen and (min-width: 1260px) {
        width: 90%;
        max-height: 230px;
        min-height: 230px;
    }
    
    box-shadow: 4px 4px 4px rgba(30, 30, 30, 0.6);
`

const profile_pic = {
    height: '300px',
    width: '250px',
}

const Show = (props) => {

    let image_id = null

    const uri = props.match.params.slug
    const url = `/api/v1/posts/${uri}`

    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
        axios.get(url)
            .then(r => {
                setPost(r.data)
                setAuthor(r.data.author)
                setLoaded(false)
            })
            .catch(r => {
                console.log(r)
            })
    }, [post.length])

    if(post.photo_data != undefined && post.photo_data != null)
        image_id = JSON.parse(post.photo_data)

    return(
        <Container className="pt-5 pb-3">
            <Row className="pb-5">
                <Col xs={9}>
                    <Row>
                        <Col>
                            { loaded ? '' : <h2>{post.title}</h2> }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            { loaded ? '' : post.description }
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5">
                        <Col>
                            {
                                image_id != null ? 
                                <Img src={`${S3}/${image_id.id}`} alt={post.title} /> :
                                '' 
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            { loaded ? '' : <p dangerouslySetInnerHTML={{ __html: post.content }} /> }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            { 
                                loaded ? 
                                '' :
                                // TODO: substituir este botão pelo componente './components/Button'
                                <Button href={`/publicacoes/atualizar/${post.slug}`} variant="primary">
                                    Atualizar esta Publicação
                                </Button>
                            }
                        </Col>
                    </Row>
                </Col>
                <Col xs={3}>
                    <Row>
                        <Col className="text-center">
                            <h3>Sobre o Autor</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/me.jpg" alt="Rafael Queiroz de Castro" style={profile_pic} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            { loaded ? '' : <h2>{author.name}</h2> }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-justify">
                            { loaded ? '' : <p>{author.bio}</p> }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export {Show}