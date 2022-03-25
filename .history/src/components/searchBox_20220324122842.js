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

  
  function List(props) {
      //create a new array by filtering the original array
      const filteredData = products.filter((el) => {
          //if no input the return the original
          if (props.input === '') {
              return el;
          }
          //return the item which contains the user input
          else {
              return el.text.toLowerCase().includes(props.input)
          }
      })
      return (
            <div className="products-wrapper">
                  {filteredData &&
                  filteredData.map(((item , key) => (
                    <Fragment>
                    <div key={key} className="post">
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
          )
  }
  
  export default List