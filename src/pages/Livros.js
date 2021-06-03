import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { BACKEND } from '../constants'
import '../App.css'

const Livros = () => {

    const [livros, setLivros] = useState([])
    const [carregandoLivros, setCarregandoLivros] = useState(false)
    const [mostrarLivro, setMostrarLivro] = useState(false)

    useEffect(() => {
        document.title = 'BookRead'
        obterLivros()
    }, [])

    async function obterLivros() {
        setCarregandoLivros(true)
        let url = `${BACKEND}/livros`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setLivros(data)
                console.log(data)
            })
            .catch(function (error) {
                console.error(`O seguinte erro foi apresentado ao obter os livros: ${error.message}`)
            })
        setCarregandoLivros(false)
    }

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <div className="livros">
                    {
                        livros.map(livro => (
                            <div className="livro" onClick={() => setMostrarLivro(true)}>
                                <img src={livro.imagem.url}></img>
                                <h5>{livro.nome}</h5>
                            </div>
                        ))
                    }
                </div>
                <Modal
                    animation={false}
                    show={mostrarLivro}
                    onHide={() => setMostrarLivro(false)}
                    keyboard={false}
                    scrollable={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2>Testando</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Funcionando</h5>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" >
                            Apagar
          </Button>
                    </Modal.Footer>
                </Modal>
                <Rodape />
            </Container>
        </>
    )
}

export default Livros