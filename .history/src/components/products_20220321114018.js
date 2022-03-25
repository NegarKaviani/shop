import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import data from '../components/products.csv';
import { csv } from 'd3';
import ReactPaginate from 'react-paginate';
import './products.css';

// const [products , setProduct] = useState([]);


// function Products (){

//     csv(data, function(data) {    
//         products.push(data); 
//     });
//     // console.log(products) 
    
//     return (
//         <div className="products-wrapper">
//         {products.map(((item) => (
//           <div key={item.gtin} className="post">
//             <div className="img-container">
//               <img src={item.image_link} />
//             </div>
//             <h3>{item.title}</h3>
//             <p>{item.gender}</p>
//           </div>
//         )))}
//       </div>
//     );
    
// }
// export default Products;

// function PaginatedItems({ itemsPerPage }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(products.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(products.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % products.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <Products currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
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
      <Items currentItems={currentItems} />
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

// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById('container')
);