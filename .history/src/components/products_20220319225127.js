import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { csv } from 'd3';
import './products.css';

function Products (){
    const [data , setData] = useState([
        {title : "" , id : 0 , img : ""}
    ]);
    useEffect(() => {
        csv(data).then(data => {
            data.forEach((e)=>{
                e.preventDefault();
                if(!undefined){
                    this.setState( prevState => ({
                        products: [ [...prevState.products] , { title: e.title , id: e.gtin, img: e.image_link}]
                     }));
                }
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