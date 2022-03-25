import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState([]);
 
    useEffect(function effectFunction() {
        fetch(csv('../components/products.csv'))
            .then(({ data: data }) => {
                setData(data);
            });
    }, []);
    
    return (
    <ul>{
        data.map(product => (
         <li key={product.id}>{product.title}</li>  
        ))
    }
    </ul>
    );
    
}
export default Products;
