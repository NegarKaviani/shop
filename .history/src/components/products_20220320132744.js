import React, { useEffect, useState } from "react";
import data from '../components/products.csv';
import { CSVLink } from "react-csv";
import { csv } from 'd3';
import './products.css';

function Products (){
    console.log(data);

    return (
        <CSVLink
        data={data}
        filename={'products.csv'}
        className="btn btn-primary"
        target="_blank"
      >
        Download me
      </CSVLink>
    );
    
}
export default Products;
