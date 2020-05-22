import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AsyncComponent } from 'spaassy-redux'

const namespace = process.env.SYSTEMNAME
let AsyncComp = AsyncComponent(namespace)

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route key="home" path="/" component={AsyncComp(() => import('@views/home'))} />
            </ Switch>
        </ HashRouter>
    )
}

export default App;