import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { BsBook, BsFillBookmarksFill } from 'react-icons/bs'
import { MdHome } from 'react-icons/md'

const Cabecalho = () => {

    return (
        <Navbar bg="secondary" variant="dark" fixed="center">
            <Navbar.Brand href="#/"><BsBook />BookRead</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#/"><MdHome />Inicio</Nav.Link>
                <NavDropdown title="Livros" id="droplivros">
                    <NavDropdown.Item href="#/livros"><BsFillBookmarksFill />Lista Livros</NavDropdown.Item>
                    <NavDropdown.Item href="#/livros/adicionar">Adicionar Livro</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Cabecalho