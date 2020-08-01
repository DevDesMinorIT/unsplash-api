import React from 'react';
import '../components/ImageList.css';
class SearchBar extends React.Component{
    // initialize state
    state = {term: ''};

    
    //prevent form from auto submitting 
    onFormSubmit = (event) => {
        event.preventDefault();
    
        this.props.onSubmit(this.state.term);
    };

    //render method returning input form
    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image SearchBar</label>
                        <input 
                            type='text'
                            value={this.state.term} 
                            // inline callback function 
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;