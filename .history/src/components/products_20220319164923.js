import './products.css'

function Products (){
    const [ title, setText ] = useState();
    const load = function(){
        fetch( './products.csv' )
            .then( response => response.title() )
            .then( responseText => {
                setText( responseText );
            })
    };
    return(
        
        <div className='product-box'>
             <button onClick={ load }>load</button>
            <div className='p-img'>
             <img></img>
            </div>
            <div className='p-title'>
                <p>{title}</p>
            </div>
        </div>

    );
}
export default Products;
