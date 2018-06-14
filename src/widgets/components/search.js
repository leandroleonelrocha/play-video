import React from 'react';
import './search.css';
//function Search(props){
//    return(
//        <form>
//            <input type="text" name="" />
//        </form>
//    )

//}

const Search = (props) => (
    <form className="Search" onSubmit={props.handleSubmit}> 
           <input 
           		type="text" 
           		defaultValue="asdsad"
           		name="search" 
           		className="Search-input" 
           		ref={props.setRef} 
           		onChange={props.handleChange}
           		value={props.value}
           		/>
    </form>
)

export default Search;
