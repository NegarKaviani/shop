import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    
csv(data, function(data) { console.log(1); });
    const [product , setProduct] = useState(data);
    console.log(product.gender);
   
    
    return (
    <ul>
        {
        data.map(product => (
         <li key={product.id}>{product.title}</li>  
        ))
    }
    </ul>
    );
    
}
export default Products;
