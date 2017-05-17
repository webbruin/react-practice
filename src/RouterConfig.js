import React from 'react';
import {Router,hashHistory,Route,IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Follow from './components/Follow';
import Column from './components/Column';
import User from './components/User';
import Login from './components/Login';
import Reg from './components/Reg';
import Article from './components/Article';
import Error from './components/Error';

const RouterConfig = ()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="follow" component={Follow}/>
      <Route path="column" component={Column}/>
      <Route path="user" component={User}/>
      <Route path="login" component={Login}/>
      <Route path="reg" component={Reg}/>
      <Route path="article" component={Article}>
        <Route path=":aid" component={Article}/>
      </Route>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
)

export default RouterConfig;