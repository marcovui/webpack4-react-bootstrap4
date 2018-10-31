import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuNavigation from './components/Structural/MenuNavigation';
import MainContainer from './components/Structural/MainContainer';

const App = () => (
  <Router>
    <React.Fragment>
      <MenuNavigation />
      <MainContainer />
    </React.Fragment>
  </Router>
);

export default App;