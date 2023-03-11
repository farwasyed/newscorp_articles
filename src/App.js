import logo from './logo.svg';
import './App.css';
import ListArticles from './components/ListArticles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        News Corp Articles
        <ListArticles/>
      </header>
    </div>
  );
}

export default App;
