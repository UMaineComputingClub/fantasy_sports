import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.js"
import Other from "./pages/Other.js"
import NewPage from './pages/NewPage.js';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/other" element={<Other/>}/>
            <Route path="/new" element={<NewPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
