import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../../reducers'
import root from '../../sagas'

import './reset';
import './style';
import Blog from '../blog';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(root)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Blog}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
