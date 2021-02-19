/*
应用的跟组件
 */
import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>{/*只匹配一个，匹配之后其他都不看*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch> 
            </Router>
        );
    }
}

export default App;
