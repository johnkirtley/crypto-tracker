import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/HomePage';
import CryptoCard from './components/CryptoCard';
import CryptoList from './components/CryptoList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/'>
        <Home />
        <CryptoList />
      </Route>

      <Route path='/cryptocard'>
        <CryptoCard />
      </Route>
    </div>
  );
}

export default App;
