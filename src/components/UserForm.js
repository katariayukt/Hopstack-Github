import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './UserForm.css'

function UserForm(props) {

    const usernameRef = useRef('');

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onAddUser(usernameRef.current.value);
        usernameRef.current.value = '';
    }

    return (
        <div className='user-form'>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Github Username</Form.Label>
                <Form.Control ref = {usernameRef} type="text" placeholder="Enter github username" />
                <Form.Text className="text-muted">
                    Click on Submit button to get details
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        </div>
    )
}

export default UserForm
