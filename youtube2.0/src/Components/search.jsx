import React from 'react'
import {Component} from 'react'
import axios from 'axios';
import API_KEY from '../config/default.json'

const ApiKey = API_KEY;

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            term: 'Search Videos',
            videos: []
        };
        this.getYTvideos = this
            .getYTvideos
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    };
    handleChange(event) {
        this.setState({value: event.target.value});  //this is HANDLECHANGE(USER INPUT)
    }
    getYTvideos = (click) => {                       //this is HANDLESUBMIT(CLICK SUBMIT)
        this.setState({
            videos: Response.data
        })
        
        console.log(this.state.videos)

        let apiEndpoint = "https://www.googleapis.com/youtube/v3/videos/search";
        apiEndpoint += ApiKey.API_KEY;

        axios({
            data: Response.data,
            url: apiEndpoint,
            type: 'get',
            contentType: 'application,json',
            success: function (videos, textStatus, jQxhr) {
                console.log(videos.items);
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown)
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getYTvideos}>
                    <label>
                        Search
                        <input id='searchbox' type="text" name="name"/>
                    </label>
                    <input type="Submit" value="Submit" onChange={this.handleChange}/>
                </form>

            </div>
        );
    };

};

export default SearchBar