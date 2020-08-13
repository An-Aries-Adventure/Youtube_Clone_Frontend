import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import config from './config/default.json'
import './Components/Stylesheets/main.css'
import {Container, Row, NavItem, NavLink} from 'react-bootstrap'
import CurrentVideo from "./Components/CurrentVideo"
import MyForm from './Components/commentForm'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            searchTerm: '',
            loading: true,
            index: null,
            videosReturned: false,
            currentVideoId: null

        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);

    };

    handleSubmit(event) {
        event.preventDefault();
        this.getVideos();
        this.videoList();
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value}); //this is HANDLECHANGE(USER INPUT)

    }

    getVideos() {
        const ApiKey = config.API_KEY;
        const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?key=" + `${ApiKey}` + "&part=snippet&type=video&q=" + `${this.state.searchTerm}`;
        axios
            .get(apiEndpoint)
            .then((response) => {
                let videoData = response.data;
                console.log(videoData);
                this.setState({
                    videos: videoData,
                    loading: !true,
                    index: 0,
                    videosReturned: true,
                    currentVideoId: videoData.items[0].id.videoId
                })
            })
            .catch((error) => {
                console.log(error)
            })
    };

    componentDidMount = () => {
        this.getVideos();
    }

     
       handleSelectVideo(videoId){
       

       }
    
    videoList() {
        console.log("VIDEOS", this.state.videos.items);
        if (this.state.videosReturned === true) {

            return this
                .state
                .videos
                .items
                .map((video, index) => {
                    // console.log(video.id.videoId);
                    let videoId = video.id.videoId
                console.log(videoId)    
                return (
                        <ul id="noBull">
                        <li>
                            <div>
                                <img src={video.snippet.thumbnails.default.url} onClick={() =>  this.setState({currentVideoId:videoId})}></img>
                                <text>{video.snippet.title}</text>
                            </div>
                        </li>
                        </ul>
                    )
                });

        }

    }

    videoDescription() {
        if (this.state.loading === !true) {
            return (this.state.videos.items[this.state.index].snippet.description)
        };

    };

    videoTitle() {
        if (this.state.loading === !true) {
            return (this.state.videos.items[this.state.index].snippet.title)
        };

    };

    render() {

        if (this.state.videos === undefined) {
            return (
                <h1>Loading...</h1>
            );
        } else {
            return (
                <Container>
                    <Row>
                        <h1 className="fontTitle">Youtube Clone</h1>
                        <NavItem>
                            <NavLink href="https://github.com/dschulz1227">
                                Damon's Github
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/An-Aries-Adventure">
                                Kyle's Github
                            </NavLink>
                        </NavItem>
                    </Row>

                    <Row className="searchForm">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={this.state.searchTerm}
                                    onChange={this.handleChange}/>
                            </label>
                            <input id="subBut" type="Submit"/>
                        </form>
                    </Row>

                    <Container id="overlay">
                        
                        <Row className="">
                            <div className="col-25%">
                            Words
                            </div>
                            <div className="mediaContainer col-50%">
                            <CurrentVideo videoId ={this.state.currentVideoId}/>
                            </div>
                            <div className="commentForm col-25">
                            <MyForm/>
                            </div>
                        </Row>

                        <Row id="titleVid">
                            {this.videoTitle()}
                        </Row>
                        <Row id="vidDescription">
                            {this.videoDescription()}
                        </Row>
                    </Container>

                    <Row id="videolistTitle">
                        <h2>Top 5 Search Results</h2>
                    </Row>
                    <Row className="videoList">
                        {this.videoList()}
                    </Row>

                </Container>
            )
        }
    }

}