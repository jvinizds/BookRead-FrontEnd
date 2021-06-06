import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'

import { FaImage } from 'react-icons/fa'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { BACKEND } from '../constants'
import '../App.css'

const Inicio = () => {

    const valorInicial = { nome: '', autor: '', genero: '', ano_lancamento: '', url_img: '', link_compra: '', }

    const [livro, setLivro] = useState([])
    const [salvandoLivro, setSalvandoLivro] = useState(false)


    const [aviso, setAviso] = useState('')
    const [erros, setErros] = useState({})

    useEffect(() => {
        document.title = 'BookRead'
    }, [])

    const imagemLivro = (props) => (
        <Tooltip {...props}>
            <img src={livro.url_img} width={200} alt='Imagem do Livro' />
        </Tooltip>
    );

    const alteraDadosLivro = e => {
        setLivro({ ...livro, [e.target.name]: e.target.value })
        setErros({})
    }

    const validaErrosLivro = () => {
        const novosErros = {}
        if (!livro.nome || livro.nome === '' || livro.nome.length > 50 || livro.nome.length < 1) novosErros.nome = 'O nome deve ter entre 1 a 50 caracteres'

        if (!livro.autor || livro.autor === '' || livro.autor.length > 50 || livro.autor.length < 1) novosErros.autor = 'O nome do autor deve ter entre 1 a 50 caracteres'

        if (!livro.genero || livro.genero === '' || livro.genero.length > 50 || livro.genero.length < 1) novosErros.genero = 'O genero deve ter entre 1 a 40 caracteres'

        if (!livro.ano_lancamento || livro.ano_lancamento === '' || livro.ano_lancamento.length > 4 || livro.ano_lancamento.length < 1) novosErros.ano_lancamento = 'O ano de lançamento deve ter pelo menos 1 caracter e no maximo 4'

        if (!livro.url_img || livro.url_img === '') novosErros.url_img = 'A URL de imagem não pode ser vazio'

        if (!livro.link_compra || livro.link_compra === '') novosErros.link_compra = 'O link de compra não pode ser vazio'

        return novosErros
    }

    async function salvarLivro(e) {
        e.preventDefault()
        const novosErros = validaErrosLivro()
        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros)
        } else {
            setSalvandoLivro(true)
            let url = `${BACKEND}/livros`
            await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livro)
            }).then(response => response.json())
                .then(data => {
                    (data._id || data.message) ? setAviso('Livro salvo com sucesso') : setAviso('')
                    setLivro(valorInicial)
                }).catch(function (error) {
                    console.error(`Erro ao salvar o livro: ${error.message}`)
                })
            setSalvandoLivro(false)
        }
    }

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <Row className="justify-content-md-center">
                    <h3>Adicionar Livro</h3>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form method="post">
                            <Form.Group controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    name="nome"
                                    type="text"
                                    value={livro.nome}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.nome}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.nome}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="autor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    name="autor"
                                    type="text"
                                    value={livro.autor}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.autor}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.autor}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="genero">
                                <Form.Label>Genero</Form.Label>
                                <Form.Control
                                    name="genero"
                                    type="text"
                                    value={livro.genero}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.genero}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.genero}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="ano_lancamento">
                                <Form.Label>Ano de Lançamento</Form.Label>
                                <Form.Control
                                    name="ano_lancamento"
                                    type="number"
                                    value={livro.ano_lancamento}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.ano_lancamento}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.ano_lancamento}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="url_img">
                                <Form.Label>
                                    Url Imagem
                                <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 100, hide: 100 }}
                                        overlay={imagemLivro}
                                    >
                                        <FaImage />
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control
                                    name="url_img"
                                    type="text"
                                    value={livro.url_img}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.url_img}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.url_img}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="link_compra">
                                <Form.Label>Link Compra</Form.Label>
                                <Form.Control
                                    name="link_compra"
                                    type="text"
                                    value={livro.link_compra}
                                    onChange={alteraDadosLivro}
                                    isInvalid={!!erros.link_compra}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.link_compra}
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Button variant="primary" type="button" title="Limpar"
                                onClick={()=> setLivro(valorInicial)}>
                                Limpar
                            </Button>
                            &nbsp;
                            <Button variant="success" type="submit" title="Salvar o registro"
                                onClick={(e) => {
                                    salvarLivro(e)
                                }}>

                                {salvandoLivro
                                    ? 'Salvando...'
                                    : 'Salvar'
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Toast
                    onClose={() => setAviso('')}
                    show={aviso.length > 0}
                    animation={false}
                    delay={4000}
                    autohide
                    className="bg-success"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}>
                    <Toast.Header>Aviso</Toast.Header>
                    <Toast.Body className="text-light">{aviso}</Toast.Body>
                </Toast>
                <Rodape />
            </Container>
        </>
    )
}

export default Inicio