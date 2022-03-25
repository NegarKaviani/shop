import './searchBox.css';

function SearchBox (){
    return(
        <div className='search-holder'>
            <input placeholder='Search Product ...' className='search-box'></input>
        </div>
    );
}

export default SearchBox;