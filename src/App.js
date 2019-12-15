import React from 'react';
import './App.css';
import { Search } from './Search/Search';
import issues from './Issues/issues';

function App() {
  return (
    <div className="App">
      <Search content={issues} />
    </div>
  );
}

export default App;
