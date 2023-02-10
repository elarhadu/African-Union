import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchCountries } from './redux/countries';
import Country from './components/Country';
import Home from './pages/Home';
// import SingleCountry from './pages/SingleCountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
