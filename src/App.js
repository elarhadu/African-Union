import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<SingleCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
