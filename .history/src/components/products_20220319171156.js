// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import DataTable from 'react-data-table-component';
// import './products.css';
 
// function Products() {
 
//   const [columns, setColumns] = useState([]);
//   const [data, setData] = useState([]);
 
//   // process CSV data
//   const processData = dataString => {
//     const dataStringLines = dataString.split(/\r\n|\n/);
//     const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
 
//     const list = [];
//     for (let i = 1; i < dataStringLines.length; i++) {
//       const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
//       if (headers && row.length == headers.length) {
//         const obj = {};
//         for (let j = 0; j < headers.length; j++) {
//           let d = row[j];
//           if (d.length > 0) {
//             if (d[0] == '"')
//               d = d.substring(1, d.length - 1);
//             if (d[d.length - 1] == '"')
//               d = d.substring(d.length - 2, 1);
//           }
//           if (headers[j]) {
//             obj[headers[j]] = d;
//           }
//         }
 
//         // remove the blank rows
//         if (Object.values(obj).filter(x => x).length > 0) {
//           list.push(obj);
//         }
//       }
//     }
 
//     // prepare columns list from headers
//     const columns = headers.map(c => ({
//       name: c,
//       selector: c,
//     }));
 
//     setData(list);
//     setColumns(columns);
//   }
 
//   // handle file upload
//   const handleFileUpload = e => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       processData(data);
//     };
//     reader.readAsBinaryString(file);
//   }
 
//   return (
//     <div>
//       <input
//         type="file"
//         accept=".csv,.xlsx,.xls"
//         onChange={handleFileUpload}
//       />
//       <DataTable
//         pagination
//         highlightOnHover
//         columns={columns}
//         data={data}
       
//       />
//     </div>
//   );
// }
 
// export default Products;


















import React, { Component } from 'react'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text : ""
    }
  }

  componentDidMount(){
    this.readTextFile(require('.././products.csv'))
  }

  readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
  };
  
  generate() {
    Papa.parse(this.state.text, {
      complete: function (results) {
        console.log(results);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => { this.generate() }} bsStyle="primary">OK</Button>
      </div>
    );
  }
}

export default Products;