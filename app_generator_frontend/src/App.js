import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Editor from './pages/Editor';
import Checkout from './pages/Checkout';

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/editor/:id" element={<Editor />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
