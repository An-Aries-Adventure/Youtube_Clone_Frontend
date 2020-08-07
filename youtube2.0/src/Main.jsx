import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import API_KEY from './config/default.json'
import './Components/Stylesheets/main.css'

const ApiKey = API_KEY;

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            searchTerm: '',
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

    //   //let userChoice = onClick =>
    //   selectVideo(){
    //     this.setState(this.state.videos[index].id.videoId)
    //     let selectedVideo ="https://www.youtube.com/embed/" + userChoice + "?autoplay=1&origin=http://example.com"
    //     return selectedVideo
    // }

    render() {
        return (
            <body className="container">
                <div>
                    <h1>Youtube Clone</h1>

                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/BtfucXjju0k?autoplay=1&origin=http://example.com"
                        frameborder="0"></iframe>
                </div>
                <div>
                    <form onSubmit={this.getVideos}>
                        <label>
                            Find Your Video
                            <br/>
                            <input type="text" id="searchInput"></input>
                        </label>
                        <input type="Submit" value="Submit" onChange={this.handleChange}/>
                    </form>
                    <button onClick={this.getVideos}></button>

                </div>
                <div>
                    {this
                        .state
                        .videos
                        .map((video, index) => {
                            const searchResults = new video(video.id);

                            return (
                                <div>
                                    Video {index(0)}
                                </div>
                            )
                        })}
                </div >

            </body>
        )
    }

}