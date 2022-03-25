import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
import './products.css';

function Products (){
    const [products , setProduct] = useState([]);
    const pagePostsLimit = 100;
    csv(data, function(data) {    
        products.push(data); 
    });
    // console.log(products) 
    
    return (
        <div className="products-wrapper">
          {products
          .slice(
            (currentPage - 1) * pagePostsLimit,
            (currentPage - 1) * pagePostsLimit + pagePostsLimit
          )
          .map((item) => {
            <div key={item.gtin} className="post">
            <div className="img-container">
              <img src={item.image_link} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.gender}</p>
          </div>;
          })}
        <Pagination
          initialPage={currentPage}
          itemPerPage={pagePostsLimit}
          onChangePage={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={posts.length}
          pageNeighbours={2}
        />
        
      </div>
    );
    
}
export default Products;
