import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './app/Router';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <Router>
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
  </Router>
);

export default App;



