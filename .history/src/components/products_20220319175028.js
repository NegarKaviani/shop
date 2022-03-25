import React, { useEffect, useState } from "react";
import { csv } from 'd3';
import './products.css';

function Products (){
    useEffect(() => {
        csv('.././products.csv').then(data => {
            console.log(data);
        })
    } ,[])
    return(
        
        <div className='product-box'>
             <button onClick={ load }>load</button>
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p>{title}</p>
            </div>
        </div>

    );
}
export default Products;
