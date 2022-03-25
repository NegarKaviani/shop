import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import ReactPaginate from 'react-paginate';
import './products.css';

function Products (){
    const [products , setProduct] = useState([]);
    csv(data, function(data) {    
        products.push(data); 
    });
    // console.log(products) 
    
    return (
        <div className="products-wrapper">
        {products.map(((item) => (
          <div key={item.gtin} className="post">
            <div className="img-container">
              <img src={item.image_link} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.gender}</p>
          </div>
        )))}
      </div>
    );
    
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById("container")
);