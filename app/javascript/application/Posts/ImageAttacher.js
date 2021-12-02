import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const ImageAttacher = (props) => {

    console.log(props)

    let image_id = null

    const [post, setPost] = useState([])

    const form = new FormData()

    const uri = props.match.params.slug
    let url = `/api/v1/posts/${uri}`

    if(uri != undefined) {
        useEffect(() => {
            axios.get(url)
                .then(r => {
                    setPost(r.data)
                })
                .catch(r => {
                    console.log(r)
                })
        }, [])
    }

    if(post.picture_data != undefined || post.picture_data != null) {
        image_id = JSON.parse(post.picture_data)
    }

    const fileHandler = (e) => {
        form.append(`post[${e.target.name}]`, e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const token = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token

        let url = `/api/v1/post/attachment/${uri}`
        axios.patch(url, form)
            .then(r => {
                history.push(`/`)
            })
            .catch(r => {
                console.log(r)
            })
    }

    return(
        <Container>
            <Row className="pt-5 pb-3">
                <Col xs={12} sm={12} md={5}>
                    <h2>Anexar uma Imagem</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col xs={{ span: 10, offset: 2 }} sm={{ span: 10, offset: 2 }} md={{ span: 3, offset: 0 }}>
                    { 
                        image_id != null ? 
                        <Img src={`/uploads/${ image_id.id }`} alt={`${pizza.name}`} /> : 
                        ''
                    }
                </Col>
            </Row>

            <Form onSubmit={handleSubmit} encType={"multipart/form-data"}>
                
                <Form.Group as={Row} className="mb-3" controlId="postImage">
                    <Form.Label column sm="2">
                        Anexe uma imagem
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={fileHandler} type={"file"} accept={"image/*"} name="photo" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 pt-3" controlId="postButton">
                    <Col xs={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} md={{ span: 3, offset: 2 }}>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="success" size="lg">
                                <i className="far fa-save"></i> Anexar
                            </Button>
                        </div>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 pt-3" controlId="postKeepButton">
                    <Col xs={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} md={{ span: 3, offset: 2 }}>
                        <div className="d-grid gap-2">
                            <Button size="lg" href="/">
                                <i className="fas fa-check-circle"></i> Manter Assim
                            </Button>
                        </div>
                        {
                            image_id == null ? 
                            <small><br />{'Obs. não há nenhuma imagem cadastrado'}</small> :
                            ''
                        }
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
}

export { ImageAttacher }