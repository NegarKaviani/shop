import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [products , setProduct] = useState([]);
    const [count , setCount] = useState([]);
    var num = 0;
    csv(data, function(data) {    
        products.push(data); 
        count.push(setCount(num++));
    });
    console.log(count) ;
    
    return (
        <div>
        {products.map(((item) => (
         
          <div key={item.gtin} className="post">
            <h3>{item.title}</h3>
            <p>{item.gender}</p>
          </div>
        )))}
      </div>
    );
    
}
export default Products;
