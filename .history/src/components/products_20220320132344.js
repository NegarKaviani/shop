import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    // const [data , setData] = useState([]);
 
    useEffect(function effectFunction() {
        csv(data)
            .then(({ data: data }) => {
                console.log(data);

            });
    }, []);
    
    return (
    <ul>
       
    </ul>
    );
    
}
export default Products;
