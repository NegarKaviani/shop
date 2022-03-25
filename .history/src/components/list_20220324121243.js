import { React, useState } from 'react'
import data from '../components/products.csv';
import { csv } from 'd3';
function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List