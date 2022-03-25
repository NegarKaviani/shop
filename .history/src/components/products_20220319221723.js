import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     csv(data).then(data => {
    //         console.log(data);
    //     })
    // } , [])
    // const dataLength = data.length;
    // console.log(dataLength);
    return(
        
            csv(data).then(data => {
                const listItems = data.map((data) =>
                    <li>{data.title}</li>
                    );
            <ul>
                {listItems}
            </ul>
            })
        
        
    );
}
export default Products;
