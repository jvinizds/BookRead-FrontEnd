import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { BsBook, BsFillBookmarksFill } from 'react-icons/bs'
import { MdHome } from 'react-icons/md'

const Cabecalho = () => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#inicio"><BsBook />BookRead</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#inicio"><MdHome />Inicio</Nav.Link>
                <Nav.Link href="#/livros"><BsFillBookmarksFill />Livros</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Cabecalho