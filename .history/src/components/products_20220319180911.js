import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    // const [data , setData] = useState([]);
    useEffect(() => {
        csv(data).then(data => {
            setData(data);
        })
    } , [])
    console.log(data);
    return(
        
        <div className='product-box'>
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p></p>
            </div>
        </div>

    );
}
export default Products;
