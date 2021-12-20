import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Row, Col, Button } from 'react-bootstrap'
import ActionCable from 'actioncable'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { messageAction } from '../application/state/actions/messageActions'

import Message from './Message'

const Chat = () => {

    /**
     * 
     */
    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])
    const [loaded, setLoaded] = useState(false)

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    
    console.log(messageAction)
    const { messageAction } = bindActionCreators(messageAction, dispatch)
    

    const cable = ActionCable.createConsumer('ws://localhost:3000/cable')

    useEffect(() => {

        axios.get('/api/v1/messages.json')
            .then(r => {
                setMessages(r.data)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })

        cable.subscriptions.create(
            { channel: 'MessagesChannel' }, 
            { received: m => onReceivedMessage(m) } 
        )
    }, [])

    const onReceivedMessage = (m) => {
        console.log(messageAction)
    }

    const handleChange = (e) => {
        console.log(e)
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/messages', {message})
            .then(r => {
                console.log(r)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-2" controlId="messageUser">
                <Form.Label column xs={{ span: 2, offset: 3 }} >
                    User:
                </Form.Label>
                <Col sm="4">
                    <Form.Control onChange={handleChange} name="user" type="text" placeholder="Joãozim..." />
                </Col>
            </Form.Group> 
            <Form.Group as={Row} className="mb-2" controlId="messageText">
                <Form.Label column xs={{ span: 2, offset: 3 }} >
                    Message:
                </Form.Label>
                <Col sm="4">
                    <Form.Control onChange={handleChange} name="message" type="text" placeholder="Diga algo..." />
                </Col>
            </Form.Group>            
            <Row>
                <Col xs={{ span: 4, offset: 5 }}>
                    <Button type="submit">
                        Enviar
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    Something nice expects to happen here <br />
                    {
                        messages.map( m => {
                            return(<div key={m.id}>{m.message}</div>)
                        })
                    }
                </Col>
            </Row>
        </Form>
    )
}

export default Chat