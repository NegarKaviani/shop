import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    
csv(data, function(data) { console.log(data); });
    const [product , setProduct] = useState([]);
 
    useEffect(function effectFunction() {
        fetch(csv(<data />))
            .then(({ data: data }) => {
                setData(data);
            });
    }, []);
    
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
