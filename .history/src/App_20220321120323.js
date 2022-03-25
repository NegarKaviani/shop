import './App.css';
import './components/searchBox';
import SearchBox from './components/searchBox';
import Products from './components/products';

function App() {
  return (
    <>
      <SearchBox />
      <PaginatedItems itemsPerPage={100} />
    </>
  );
}

export default App;
