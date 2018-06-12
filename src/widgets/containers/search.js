import React,{Component} from 'react';
import Search from '../components/search';
class SearchContainer extends Component{
    handleSubmit = event => {
        event.preventDefault();
        console.log('sad');
    }
    render(){
        return(
            <Search handleSubmit={this.handleSubmit} />
        )
    }
}

export default SearchContainer;
