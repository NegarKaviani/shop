import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [product , setProduct] = useState();
    csv(data, function(data) {     
       console.log(data) 
    });
   
    
    return (
        <div>
        {data.map(((item) => (
            console.log(item),
          <div key={item.gtin} className="post">
            <h3>{item.title} - {item.id}</h3>
            <p>{item.gender}</p>
          </div>
        )))}
      </div>
    );
    
}
export default Products;
