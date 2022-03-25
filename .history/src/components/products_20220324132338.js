import React, { Component, Fragment, useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import ReactPaginate from 'react-paginate';
import './products.css';
import Modal from "react-bootstrap/Modal";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalFooter } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import List from "./searchBox";


const products = [];

csv(data, function(data) {  
  const exist = products.find(item => item.title == data.title) ;
  if(!exist){
    products.push(data); 
  }
  // console.log(images.length);
});

export const Products = ({ currentItems , props}) => {
  console.log(currentItems);

  const [show, setShow] = useState(-1);
  const filteredData = currentItems.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
      if(el.title.toLowerCase().includes(props.input))
        return el.title.toLowerCase().includes(props.input);
    }
  })

  return (
        <div className="products-wrapper">
        {filteredData &&
        filteredData.map(((item , key) => (
          <Fragment>
          <div key={key} className="post" id={item.gtin}>
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
          <button onClick={() => {setShow(key)}}>more pics</button>
          {/* <div  style={{display : show ? "block" : "none"}}>
            <img src={item.additional_image_link.split(',')}/>
          </div> */}

          <Modal id={key} show={show === key} onHide={() => {setShow(-1)}}>
            
            <img src={item.additional_image_link.split(',')}/>
            <ModalFooter>
            <button onClick={() => {setShow(-1)}} className="close-btn">Cancel</button>
            </ModalFooter>
          </Modal>
          </div>

          </Fragment>
        )))}
        
      </div>
    );
}

export default function PaginatedItems({ itemsPerPage }) {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


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
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Products currentItems={currentItems} input={inputText} />
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

