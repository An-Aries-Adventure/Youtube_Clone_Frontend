import React from 'react'
import {Component} from 'react'
import axios from 'axios';
import API_KEY from '../config/default.json'

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
        const searchTerm = '';
        const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?key=" + `${ApiKey.API_KEY}` + "&part=snippet&q=" + `${searchTerm}`
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
    //let userChoice = onClick =>
    selectVideo() {
     selectedVideo = this.setState(this.state.videos[index])
     src="https://www.youtube.com/embed/BtfucXjju0k?autoplay=1&origin=http://example.com"

    }

    render() {
        return (
            <div>
                <form onSubmit={this.getVideos}>
                    <label>
                        Search
                        <input type="text" name="name"/>
                    </label>
                    <input type="Submit" value="Submit" onChange={this.handleChange}/>
                </form>

            </div>
        );
    };

};

export default SearchBar