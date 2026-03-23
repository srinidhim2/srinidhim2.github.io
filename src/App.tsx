import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Posts from './pages/Posts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>
            Built with ❤️ by <a href="https://github.com/srinidhim2" target="_blank" rel="noopener noreferrer">Srinidhi M</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
