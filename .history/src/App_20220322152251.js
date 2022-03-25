import './App.css';
import './components/searchBox';
import SearchBox from './components/searchBox';
import PaginatedItems from './components/products';
import React, { Component, useEffect, useState } from "react";


function App() {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (
    <>
      {!spinner  &&
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div> 
      }
      <SearchBox />
      <PaginatedItems itemsPerPage={100} />
    </>
  );
}

export default App;
