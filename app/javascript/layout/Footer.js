import React, { useState} from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

import { Form as SubscribeForm } from './Form'
import AlertModal from './AlertModal'

const Footer = () => {

    const [newsletter, setNewsletter] = useState([])
    const [modal, setModal] = useState(false)
    const [content, setContent] = useState([])

    const handleModalOpen = () => {
        setModal(true)
    }

    const handleModalClose = () => {
        setModal(false)
    }

    const handleChange = (e) => {
        setNewsletter(Object.assign({}, newsletter, {[e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/newsletters', newsletter)
            .then(r => {
                setContent(r.data)
                handleModalOpen()
            })
            .catch(err => {
                setContent(err.response.data.message)
                handleModalOpen()
            })
    }

    return(
        <Container fluid className="mt-3 bg-info text-white">
            <Row className="pt-5">
                <Col>
                    <h2>
                        {'Rafael on {R}ails'}
                    </h2>
                </Col>
            </Row>
            <Row className="pb-3">
                <Col>
                    <Row>
                        <Col>
                            <a href="/perfil" className="text-white">Meu perfil</a>
                        </Col>
                        <Col>
                            Blog feito com propósito de troca de informação
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Ruby on Rails & React
                        </Col>
                        <Col>
                            Veja também Docker, Sidekiq entre outros
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Acompanhe este projeto no Github
                        </Col>
                        <Col>
                            Impulsionar Blog
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Sabe o que seria maneiro? <br />
                            Me seguir lá no 
                            {` `}<a href="https://github.com/rafaelqueiroz88" target="blank" className="text-white">
                                Github
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col className="text-center">
                            <p>
                                Afim de receber atualizações quentinhas? <br />
                                Cadastre-se para receber as novidades
                            </p>
                        </Col>
                    </Row>
                    <SubscribeForm handleChange={handleChange} handleSubmit={handleSubmit} />
                </Col>
            </Row>
            <AlertModal modal={modal} content={content} handleModalClose={handleModalClose} />
        </Container>
    )
}

export default Footer