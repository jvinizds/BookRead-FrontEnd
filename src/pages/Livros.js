import React, { useEffect } from 'react'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const Livros = () => {

    useEffect(() => {
        document.title = 'BookRead'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                
                <Rodape />
            </Container>
        </>
    )
}

export default Livros