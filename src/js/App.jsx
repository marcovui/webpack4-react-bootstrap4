import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuNavigation from './components/structural/MenuNavigation';
import MainContainer from './components/structural/MainContainer';

const App = () => (
  <Router>
    <React.Fragment>
      <MenuNavigation />
      <MainContainer />
    </React.Fragment>
  </Router>
);

export default App;