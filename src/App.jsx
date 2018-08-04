import React from 'react';
import SearchBar from './components/SearchBar';
import RecommendedList from './components/RecommendedList';
import TopList from './components/TopList';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar onChange={(e) => { console.log(e); }} />
      <RecommendedList />
      <TopList />
    </div>
  );
}

export default App;
