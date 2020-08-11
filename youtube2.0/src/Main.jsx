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

<<<<<<< HEAD
    
        this.getVideos = this.getVideos.bind(this);

        this.handleChange = this.handleChange.bind(this);
=======
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);

>>>>>>> 4b49062b6cb6b6fe86793bce64630f0e7dba72f8
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
                // console.log(videoData);
                this.setState({
                    videos: videoData,
                    loading: !true,
                    index: 0
                })
            })
<<<<<<< HEAD
        // this.setState({videos: ''})

        // console.log(this.state.videos)
=======
            .catch((error)=>{
                console.log(error)
            })
>>>>>>> 4b49062b6cb6b6fe86793bce64630f0e7dba72f8
    };

    componentDidMount = () => {
        this.getVideos();
    }

    selectVideo() {
<<<<<<< HEAD
        console.log(this.state.videos[this.state.index]);
=======
>>>>>>> 4b49062b6cb6b6fe86793bce64630f0e7dba72f8
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
<<<<<<< HEAD
                    src = {this.selectVideo()}
                    frameBorder="0">
                </iframe>
        )}
    }

    VideoTile (videos, onVideoClick){
        return (
            <div onClick = {() => onVideoClick(videos)}>
                 <img style={{marginRight: '10px'}} alt="thumbnail" src={videos}/>
                <b><p>{videos.snippet.title}</p></b>
            </div>
        )
    }

    render() {

        const {videos, index} = this.state

        if (videos === undefined){
            return(<h1>Loading...</h1>);
        }
        else {
            return(
            <body className="container">
                <div>
                    <h1>Youtube Clone</h1>
                {this.renderIFrame()}
                </div>
                <div>
                    <form  onSubmit={this.handleChange}>
                        <label>
                            Find Your Video
                            <br/>
                            <input type="text" id="searchInput"></input>
                        </label>
                        <input type="Submit" value="Submit" onChange={this.handleChange}/>
                    </form>
                    <button onClick={this.selectVideo}></button>

                </div>
                {/* <div>
                    {videos.map((video, index) => {
=======
                    src={this.selectVideo()}
                    frameborder="0"></iframe>
            )
        }
    }

    render() {

        if (this.state.videos === undefined) {
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
>>>>>>> 4b49062b6cb6b6fe86793bce64630f0e7dba72f8
                            const searchResults = new video(video.id);

                            return (
                                <div>
                                    Video {index(0)}
                                </div>
                            )
                        })}
                </div > */}
<<<<<<< HEAD
            </body>
            )}
=======

                </div>
            )
        }
>>>>>>> 4b49062b6cb6b6fe86793bce64630f0e7dba72f8
    }

}