import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { csv } from 'd3';
import './products.css';

function Products (){
    const row = d =>{
        d.population = +d.population;
        return d;
    }
    const [data , setData] = useState([]);
    useEffect(() => {
        csv('products.csv' , row).then(data => {
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
                <p>{data.title}</p>
            </div>
        </div>

    );
}
export default Products;
