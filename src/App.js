import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from "./paginas/index";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
      </div>
    </Router>
  )
};

export default App;