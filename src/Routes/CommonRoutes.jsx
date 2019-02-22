import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../Components/pages/About'
import Features from '../Components/pages/Features'



class CommonRoutes extends Component {
    render() { 
        return (
            <Switch>
                
                <Route path='/about' component={About} exact />
                <Route path='/features' component={Features} exact />

                
            </Switch>
        );
    }
}


export default CommonRoutes;