import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [product , setProduct] = useState([]);
    csv(data, function(data) { setProduct(data) });
    // console.log(product);
   
    
    return (
    <ul>
        
    </ul>
    );
    
}
export default Products;
