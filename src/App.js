import React from 'react';
import './App.css';
import Header from './components/Layout/Header.jsx';
import Navbar from './components/Layout/Navbar.jsx';
import BusinessMeet from './components/Layout/BusinessMeet.jsx';
import Speakers from './components/Layout/Speakers.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <BusinessMeet/>
      <Speakers/>
    </div>
  );
}

export default App;
