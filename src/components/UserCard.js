import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

import './UserCard.css'

function UserCard(props) {
    return (
        <div className="user-card">
           
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.cardUser.url} />
            <Card.Body>
                <Card.Title>Username: {props.cardUser.username}</Card.Title>
                <Card.Text>
                    {props.cardUser.bio}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>User ID:{props.cardUser.id}</ListGroupItem>
                <ListGroupItem>Repositories: {props.cardUser.repos_no}</ListGroupItem>
            </ListGroup>
        </Card>

        </div>
    )
}

export default UserCard
