import React from 'react'
import { Col, Card as CardComponent } from 'react-bootstrap'
import Button from './Button'

import { AWS_S3 as S3 } from '../constants/constants'

const shaddow = {
    boxShadow: '12px 12px 12px rgba(30, 30, 30, .8)',
    width: '100%', // '18rem'
}

/**
 * 
 * @param {title, description, content, photo_data = null} props 
 * @returns Component
 */
const Card = (props) => {

    const image_id = props.attributes.photo_data ? JSON.parse(props.attributes.photo_data) : null
    
    return(
        <Col sm={4}>
            <CardComponent className="mb-3" style={ shaddow }>
                {
                    image_id != null ?
                    <CardComponent.Img variant="top" src={`${S3}/${image_id.id}`} /> :
                    ''
                }
                <CardComponent.Body>
                    <CardComponent.Title>
                        { props.attributes.title }
                    </CardComponent.Title>
                    <CardComponent.Text>
                        <strong>{ props.attributes.description }</strong> <br />
                        Por: { props.attributes.author.name }
                    </CardComponent.Text>
                    <Button 
                        href={`/publicacoes/${ props.attributes.slug }`}
                        icon='far fa-eye'
                        text='Saiba Mais'
                    />
                    {` `}
                    <Button
                        variant='danger'
                        href={`/publicacoes/${ props.attributes.slug }`}
                        icon='fas fa-trash-alt'
                        text='Apagar'
                        action={props.handleDelete(props.attributes.slug)} />
                </CardComponent.Body>
            </CardComponent>
        </Col>
    )
}

export default Card