import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from './constants';

import reducers from './reducers';
import Async from './middlewares/async';
import App from './components/App';
import GenresContainer from './components/GenresContainer';
import CallBack from './components/callback';

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
});

const createStoreWithMiddleware = applyMiddleware(
  Async
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GenresContainer}/>
        <Route path="login" component={CallBack}/>
        <Route path="(:genre)" component={GenresContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.root')
);
