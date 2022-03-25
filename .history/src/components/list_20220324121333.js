import { React, useState } from 'react'
import data from '../components/products.csv';
import { csv } from 'd3';


const products = [];

csv(data, function(data) {  
    const exist = products.find(item => item.title == data.title) ;
    if(!exist){
      products.push(data); 
    }
    // console.log(images.length);
  });
function List(props) {
    return (
        <ul>
            {products.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List