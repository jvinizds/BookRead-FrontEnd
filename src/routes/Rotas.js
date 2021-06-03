import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Livros from '../pages/Livros'

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/livros" component={Livros} />
            </Switch>
        </HashRouter>
    )
}