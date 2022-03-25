import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    return(
        
        <div className='product-box'>
            {csv(data).then(data => {
            console.log(data);
            }) }
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p>{ data.title }</p>
            </div>
        </div>

    );
}
export default Products;
