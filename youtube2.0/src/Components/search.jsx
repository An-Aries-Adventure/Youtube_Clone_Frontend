import React from 'react'
import {Component} from 'react'
import axios from 'axios';
import API_KEY from '../config/default.json'
import './Stylesheets/main.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            videos: '',
            loading: true
        };
        this.getVideos = this
            .getVideos
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    };

    handleChange(event) {
        this.setState({searchTerm: event.target.value}); //this is HANDLECHANGE(USER INPUT)
    }

    getVideos = () => {
        const ApiKey = API_KEY;
        // const searchTerm = document.getElementById('searchInput').value;
        const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?key=" + `${ApiKey.API_KEY}` + "&part=snippet&q=" + `${this.state.searchTerm}`;
        console.log(apiEndpoint);
        axios
            .get(apiEndpoint)
            .then((response) => {
                let videoData = response.data;
                console.log(videoData);
                this.setState({
                    videos: videoData,
                    index: 0,
                    loading: !true
                })
                console.log(this.state.videos)
            })
        // this.setState({videos: ''})

        console.log(this.state.videos)
    };

    componentDidMount = () => {
        this.getVideos();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getVideos}>
                    <label>
                        Find Your Video  <br/>
                        <input type="text" id ="searchInput"></input>
                    </label>
                    <input type="Submit" value="Submit" onChange={this.handleChange}/>
                </form>

            </div>
        );
    };

};

export default SearchBar