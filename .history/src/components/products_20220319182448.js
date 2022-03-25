import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    // const [data , setData] = useState([]);
    useEffect(() => {
        csv(data).then(data => {
            console.log(data);
        })
    } , [])
    const dataLength = data.length;
    console.log(dataLength);
    return(
        
        <div className='product-box'>
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p>{ data}</p>
            </div>
        </div>

    );
}
export default Products;
