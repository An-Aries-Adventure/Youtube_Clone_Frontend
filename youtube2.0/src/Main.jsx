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
            loading: true,
            index: null

        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);

    };

    handleSubmit(event) {
        console.log(this.state.searchTerm);
        event.preventDefault();
        this.getVideos();
    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({searchTerm: event.target.value}); //this is HANDLECHANGE(USER INPUT)
        // console.log(this.state.searchTerm)

    }

    getVideos() {
        const ApiKey = API_KEY;
        const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?key=" + `${ApiKey}` + "&part=snippet&type=video&q=" + `${this.state.searchTerm}`;
        console.log(apiEndpoint);
        axios
            .get(apiEndpoint)
            .then((response) => {
                let videoData = response.data;
                console.log(videoData);
                this.setState({
                    videos: videoData,
                    loading: !true,
                    index: 0
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    componentDidMount = () => {
        this.getVideos();
    }

    selectVideo() {
        var chosenVideo = this.state.videos.items[this.state.index].id.videoId;

        return "https://www.youtube.com/embed/" + `${chosenVideo}` + "?autoplay=1&origin=http://example.com"
    }

    renderIFrame() {
        if (this.state.loading === !true) {
            return (
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    src={this.selectVideo()}
                    frameborder="0"></iframe>
            )
        }
    }

    render() {

        if (this.state.videos == undefined) {
            return (
                <h1>Loading...</h1>
            );
        } else {
            return (
                <div className="container">
                    <div>
                        <h1>Youtube Clone</h1>
                        {this.renderIFrame()}
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Find Your Video
                                <br/>
                                <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                            </label>
                            <input type="Submit"/>
                        </form>

                    </div>
                    {/* <div>
                    {this.state.videos.map((video, index) => {
                            const searchResults = new video(video.id);

                            return (
                                <div>
                                    Video {index(0)}
                                </div>
                            )
                        })}
                </div > */}

                </div>
            )
        }
    }

}