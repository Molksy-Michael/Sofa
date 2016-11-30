import React from 'react'
import {Route, IndexRedirect} from 'react-router'

import RootComponent from './index'
import About from './components/about'

export default(
    <Route path="/" component={RootComponent}>
        <IndexRedirect to="/welcome"/>
        
        <Route path="about" component={About}/>
    </Route>
);