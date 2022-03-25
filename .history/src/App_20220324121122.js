import './App.css';
import './components/searchBox';
import SearchBox from './components/searchBox';
import PaginatedItems from './components/products';
import React, { Component, useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (
    <>
      { spinner  &&
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div> 
      }
      <SearchBox />
      <List />
      <PaginatedItems itemsPerPage={100} />
    </>
  );
}

export default App;
