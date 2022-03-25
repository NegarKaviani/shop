import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState([]);
 
    useEffect(function effectFunction() {
        fetch('../components/products.csv')
            .then(response => response.json())
            .then(({ data: products }) => {
                setData(products);
            });
    }, []);
    
    return (
    <ul>
        products.map(product => (
         <li key={product.id}>{product.title}</li>  
        ));
    </ul>
    );
    
}
export default Products;
