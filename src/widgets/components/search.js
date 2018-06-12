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
           <input type="text" name="search" className="Search-input"/>
    </form>
)

export default Search;