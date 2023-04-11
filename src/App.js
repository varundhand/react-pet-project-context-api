import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Pricing />
      <List />
    </div>
  );
}
