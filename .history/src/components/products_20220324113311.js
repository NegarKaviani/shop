import React, { Component, Fragment, useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import ReactPaginate from 'react-paginate';
import './products.css';
import Modal from "react-bootstrap/Modal";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalFooter } from "react-bootstrap";

const products = [];

csv(data, function(data) {  
  const exist = products.find(item => item.title == data.title) ;
  if(!exist){
    products.push(data); 
  }
  // console.log(images.length);
});

export function Products ({ currentItems} , props){
  var i =0;
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = (props) =>{
    props.setShow(!show);
  } 
    return (
        <div className="products-wrapper">
        {currentItems &&
        currentItems.map(((item) => (
          <Fragment key={item.gtin} >
          <div className="post">
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
          <button key={item.gtin} onClick={handleShow}>more pics</button>
          <div  style={{display : show ? "block" : "none"}}>
            <img key={item.gtin} src={item.additional_image_link.split(',')}/>
          </div>

          {/* <Modal id={key} show={show} onHide={handleClose}>
            
            <img src={item.additional_image_link.split(',')}/>
            <ModalFooter>
            <button onClick={handleClose} className="close-btn">Cancel</button>
            </ModalFooter>
          </Modal> */}
          </div>

          </Fragment>
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

