import React from 'react'
import {Component} from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            term: 'Search Videos'
        };
        this.onInputChange = this
            .onInputChange
            .bind(this);
    };

    onInputChange(event) {
        this.setState({term: event.target.value});
        console.log(this.state.term);
    };

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange}/>

            </div>
        );
    };

};

export default SearchBar