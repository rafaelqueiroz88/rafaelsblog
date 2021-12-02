import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Form as FormComponent } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { actionCreators } from '../state/index'

import Input from '../components/Input'
import Button from '../components/Button'

const Form = (props) => {

    let history = useHistory()

    const [post, setPost] = useState({author_slug: 'rafael-queiroz-66135'})

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const { publishPostAction } = bindActionCreators(actionCreators, dispatch)

    if(props.post !== undefined) {
        useEffect(() => {
            axios.get(props.post)
                .then(r => {
                    publishPostAction(r.data)
                    setPost(r.data)
                })
                .catch(r => {
                    console.log(r)
                })
        }, [post.length])
    }
    
    const handleChange = (e) => {
        setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
    }

    const handleContentChanges = (e) => {
        setPost(Object.assign({}, post, {['content']: e}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        if(props.post !== undefined) {
            axios.patch(props.post, post)
                .then(response => {
                    history.push('/')
                })
                .catch(response => {
                    console.log(response)
                })
        }
        else {
            axios.post('/api/v1/posts', post)
                .then(response => {
                    publishPostAction(response.data)
                    history.push(`/publicar/anexar/${response.data.slug}`)
                })
                .catch(response => {
                    console.log(response)
                })
        }
    }

    return(
        <FormComponent onSubmit={handleSubmit}>
            <Input 
                label="Título"
                labelColumn={2}
                inputColumn={10}
                controlId='postTitle'
                name='title'
                action={handleChange}
                inputValue={post.title === undefined ? '' : post.title}
                placeholder="Título da publicação aqui..."
            />
            
            <Input 
                label="Descrição"
                labelColumn={2}
                inputColumn={10}
                controlId='postDescription'
                name='description'
                action={handleChange}
                inputValue={post.description === undefined ? '' : post.description}
                placeholder="Descrição rápida e objetiva aqui..."
            />
            
            <FormComponent.Group as={Row} className="mb-2" controlId="postContent">
                <FormComponent.Label column sm="2">
                    Mãos a obra...
                </FormComponent.Label>
                <Col sm="10">
                    <ReactQuill theme="snow" value={post.content === undefined ? '' : post.content} onChange={handleContentChanges}/>
                </Col>
            </FormComponent.Group>

            <FormComponent.Group as={Row} className="mb-3 pt-3" controlId="menu">
                <Col xs={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
                    <div className="d-grid gap-2">
                        <Button
                            variant='primary'
                            icon='fas fa-plus'
                            text='Publicar'
                            type='submit' />
                    </div>
                </Col>
            </FormComponent.Group>
        </FormComponent>
    )
}

export default Form