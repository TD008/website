// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container style={{ marginLeft: 240, padding: '16px' }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;