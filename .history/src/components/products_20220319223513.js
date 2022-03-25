import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState([
        {title : "" , price : 0 , img : ""}
    ]);
    useEffect(() => {
        csv(data).then(data => {
            data.forEach((e)=>{
                setTheArray(oldArray => [...oldArray, e])
                console.log(e.title);
            }
            );
        })
    } , [])
    return(
        
        <div className='product-box'>
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
