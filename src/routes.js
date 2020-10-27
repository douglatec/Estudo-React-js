import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainCeps from './pages/cep/buscaCep';

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/pesquisaCep" component = {MainCeps} />
        </Switch>
    </BrowserRouter>
)

export default Routes;