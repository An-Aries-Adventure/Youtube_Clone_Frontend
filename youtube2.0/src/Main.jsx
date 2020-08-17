import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import config from './config/default.json'
import './Components/Stylesheets/main.css'
import {Container, Row, NavItem, NavLink, Col, Button} from 'react-bootstrap'
import CommentForm from './Components/commentForm'
import CurrentVideo from './Components/CurrentVideo'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            searchTerm: '',
            loading: true,
            index: null,
            videosReturned: false,
            currentVideoId: null,
            currentDes: null,
            currentTitle: null

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
                    currentVideoId: videoData.items[0].id.videoId,
                    currentDes: videoData.items[0].snippet.description,
                    currentTitle: videoData.items[0].snippet.title
                })
            })
            .catch((error) => {
                console.log(error)
            })
    };

    getComments(videoId){

    axios.get(`http://localhost:5000/api/videos/${videoId}`, {
    
    }).then((res) => {
       console.log('res', res);
        const commentData = res.data;
        const videoComments = commentData.comments;
    return (
            <div>
            <text>"Video Comments"</text>
                <div>
                 {videoComments}
                </div>
            </div>
    );    

    }).catch((err) => {
         console.log('No comments exist for this video', err)
         return (
             ""
         )
    });
    };




    componentDidMount = () => {
        this.getVideos();
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
                        <Col>
                            <ul id="noBull">
                                <div>
                                    <li>
                                        <img
                                            src={video.snippet.thumbnails.default.url}
                                            onClick={() => this.setState({currentVideoId: videoId, currentDes: video.snippet.description, currentTitle: video.snippet.title})}></img>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <p id="listTitle">{video.snippet.title}</p>
                                    </li>
                                </div>

                            </ul>
                        </Col>
                    )
                });
        }
    }

    videoDescription() {
        if (this.state.loading === !true) {
            return (this.state.currentDes)
        };
    };

    videoTitle() {
        if (this.state.loading === !true) {
            return (this.state.currentTitle)
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
                        <Col id="leftLink">
                            <NavItem>
                                <NavLink href="https://github.com/dschulz1227">
                                    Damon's Github
                                </NavLink>
                            </NavItem>
                        </Col>

                        <Col id="rightLink">
                            <NavItem>
                                <NavLink href="https://github.com/An-Aries-Adventure">
                                    Kyle's Github
                                </NavLink>
                            </NavItem>
                        </Col>

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
                    
                    
                    
                        <Button id="likeButton">Like</Button><Button id="likeButton">Dislike</Button>
                        
                    
                    </Row>

                    <Container>

                        <Row className="">
                            <Col className="col-25%">
                                {/* this is a place holder */}
                            </Col>
                            <Col className="mediaContainer col-50%">
                                <CurrentVideo videoId ={this.state.currentVideoId}/>
                               
                            
                            </Col>
                            <Col id="moveover" className="commentForm col-auto">
                                <CommentForm/>
                                 {this.getComments(this.state.currentVideoId)}
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row id="titleVid">
                            {this.videoTitle()}
                        </Row>
                        
                        <Row id="vidDescription">
                            <Col className="25%"></Col>
                            <Col>
                            <p id="disBorder">{this.videoDescription()}</p>
                            </Col>
                            <Col className="25%"></Col>
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