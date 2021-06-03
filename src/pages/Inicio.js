import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const Inicio = () => {

    useEffect(() => {
        document.title = 'BookRead'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <h1>Ola</h1>
                <Rodape />
            </Container>
        </>
    )
}

export default Inicio