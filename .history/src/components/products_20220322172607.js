import React, { Component, useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import ReactPaginate from 'react-paginate';
import './products.css';
import Modal from "react-bootstrap/Modal";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";

const products = [];

csv(data, function(data) {  
  const exist = products.find(item => item.title == data.title) ;
  if(!exist){
    products.push(data); 
  }
  // console.log(images.length);
});

export function Products ({ currentItems }){
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
    return (
        <div className="products-wrapper">
        {currentItems &&
        currentItems.map(((item ) => (
          <div key={item.gtin} className="post">
            <div className="img-container">
              <img src={item.image_link} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.gender}</p>
            { item.sale_price != item.price ? 
              <div>
                <p className="before-sale-price">{item.price}</p>
                <p>{item.sale_price}</p>
              </div>
             :
             <div>
              <p>{item.price}</p>
            </div>
          } 
          <button onClick={showModal}>more pics</button>
          {() => { var arr = item.additional_image_link.split(',');
           console.log(arr);
            
          <Modal show={isOpen} onHide={hideModal}>
            
              <Carousel>
                { brr.map((img) => {
                    console.log(img);
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img}
                      />
                    </Carousel.Item>
                  })}
                
              </Carousel>
           
            <Modal.Footer>
              <button onClick={hideModal}>Cancel</button>
            </Modal.Footer>
          </Modal>
          
          
        }
      } 
          </div>
        )))}
        
      </div>
    );
      
}

export default function PaginatedItems({ itemsPerPage }) {
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
    console.log(products);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
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

