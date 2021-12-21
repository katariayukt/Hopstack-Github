import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Hopstack Github</Navbar.Brand>
                <Navbar.Toggle />
            </Container>
        </Navbar>                       
    )
}

export default NavBar
