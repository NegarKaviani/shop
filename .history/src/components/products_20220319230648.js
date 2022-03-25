import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState();
    useEffect(() => {
        csv(data).then(data => {
            console.log(data);
            data.forEach((e)=>{
                console.log(e);
                if(e != undefined){
                    
                    setData( () => ({
                        products: [ ...data , { title: e.title , id: e.gtin, img: e.image_link}]
                     }));
                }
                

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
