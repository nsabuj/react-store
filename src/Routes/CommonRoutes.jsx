import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../Components/pages/About'




class CommonRoutes extends Component {
    render() { 
        return (
            <Switch>
                
                <Route path='/about' component={About} exact strict/>

                
            </Switch>
        );
    }
}


export default CommonRoutes;