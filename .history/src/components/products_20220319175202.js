import React, { useEffect, useState } from "react";
import { csv } from 'd3';
import './products.css';

function Products (){
    useEffect(() => {
        csv('products.csv').then(data => {
            console.log(data);
        })
    } ,[])
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
