import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import 'history'

import RootComponent from './App'
import About from './components/about'
import Home from './components/Home'

export default(
    <Route path="/" component={RootComponent}>
        <IndexRedirect to="/home"/>
        
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
);