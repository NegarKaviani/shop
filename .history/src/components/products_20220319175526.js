import React, { useEffect, useState } from "react";
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState();
    useEffect(() => {
        csv('products.csv').then(data => {
            setData(data);
        })
    } , [])
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
