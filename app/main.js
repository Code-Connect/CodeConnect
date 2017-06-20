import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';
import Sidecar from "gitter-sidecar";

const store = configureStore(window.INITIAL_STATE);

var myChat = new Sidecar({room: 'CodeConnect-Project1/Project12'});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
