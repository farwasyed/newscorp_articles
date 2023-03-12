import logo from './logo.svg';
import './App.css';
import ListArticles from './components/ListArticles';
import capi from "./data/capi.json";
import { useState } from 'react';

function App() {
  const articles = capi.results;

  console.log(articles, `articles from app`)
  return (
    <div className="App">
      <header className="App-header">
        <ListArticles articles={articles}/>
      </header>
    </div>
  );
}

export default App;
