import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    useEffect(() => {
        csv(data).then(data => {
            console.log(data);
            const columns = data.columns;
        })
    } , [])
    return(
        
        <div className='product-box'>
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p>{ columns }</p>
            </div>
        </div>

    );
}
export default Products;
