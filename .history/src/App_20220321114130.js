import './App.css';
import './components/searchBox';
import SearchBox from './components/searchBox';
import Products from './components/products';

function App() {
  return (
    <>
      <SearchBox />
      <div id="container"></div>
    </>
  );
}

export default App;
