import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar onChange={(e) => {console.log(e);}} />
    </div>
  );
}

export default App;
