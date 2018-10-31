import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuNavigation from './components/Structural/MenuNavigation';
import MainContainer from './components/Structural/MainContainer';

const App = () => (
  <Router>
    <div>
      <MenuNavigation />
      <MainContainer />
    </div>
  </Router>
);

export default App;