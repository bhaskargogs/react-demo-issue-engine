import React from 'react';
import './App.css';
import { Search } from './Search/Search';

function App() {
  const issues = [
    'Issue#1: Database Connectivity Feature',
    'Issue#2: RestAPI call made and could\'t fetch data',
    'Issue#3: Database servers are down'
  ]
  return (
    <div className="App">
      <Search content={issues} />
    </div>
  );
}

export default App;
