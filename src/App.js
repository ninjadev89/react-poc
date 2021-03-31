import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './app/Router';

const App = () => (
  <Router>
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
  </Router>
);

export default App;



