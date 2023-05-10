import React from 'react';
import {
  BrowserRouter as Router, useRoutes,
} from 'react-router-dom';
import routes from './routes';

import './App.less';

const MyRouter = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => (
  <Router basename={process.env.REACT_APP_ROUTER_BASENAME || '/'}>
    <MyRouter />
  </Router>
);

export default App;
