

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Adventures from './Adventures'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/adventures/:city" element={<Adventures />} /> 
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
