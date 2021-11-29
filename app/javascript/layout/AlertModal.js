import React from 'react'
import { Modal } from 'react-bootstrap'

import Button from '../application/components/Button'

const AlertModal = (props) => {

    let message = ''
    if(props.content.hasOwnProperty('email'))
        message = 'Este endereço de e-mail já foi utilizado!'
    else
        message = 'Endereço cadastrado com sucesso!'

    return(
        <Modal show={props.modal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Inscrição para novidades
            </Modal.Header>
            <Modal.Body>
                <p>
                    { message }
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    icon="far fa-times-circle" 
                    text="Fechar" 
                    action={props.handleModalClose} />
            </Modal.Footer>
        </Modal>
    )
}

export default AlertModal