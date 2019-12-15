import React from 'react';
import './App.css';
import issues from './Issues/issues';
import { Searchbar } from './Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Searchbar content={issues} />
    </div>
  );
}

export default App;
