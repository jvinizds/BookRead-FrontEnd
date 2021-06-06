import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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
                <Row className="justify-content-md-center">
                    <h1>Seja bem-vindo ao BookRead</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Button type="button" href="#/livros">
                        Lista de Livros
                    </Button>
                        &nbsp;
                    <Button type="button" href="#/livros/adicionar">
                        Adicionar Livro
                    </Button>
                </Row>
                <Rodape />
            </Container>
        </>
    )
}

export default Inicio