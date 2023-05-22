import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Audio2txt from './pages/Audio2txt';
import Txt2audio from './pages/Txt2audio';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio2txt" element={<Audio2txt />} />
        <Route path="/txt2audio" element={<Txt2audio />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
