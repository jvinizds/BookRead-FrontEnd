import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import { BsBook } from 'react-icons/bs'

const Rodape = () => {

    return (
        <Navbar bg="dark" fixed="bottom">
            <Navbar.Brand href="#/" className="text-light">
                <BsBook/> BookRead &copy; - Todos os direitos reservados
            </Navbar.Brand>
        </Navbar>
    )
}

export default Rodape