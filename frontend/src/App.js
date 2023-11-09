import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Other from './pages/Other.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <h1>Black Bear Bets</h1>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
