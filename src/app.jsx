// react
import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { render } from 'react-dom';

// import createBrowserHistory from 'history/lib/createBrowserHistory'; <-- Broken

// app core
import App from './app/index.js';

const Bootstrapper = {
    start() {
      return render((
        <Router history={hashHistory}>
          <Route path='/' component={App} >
          </Route>
        </Router>
      ), document.querySelector('#main-app'));
    }
};

export default Bootstrapper;
