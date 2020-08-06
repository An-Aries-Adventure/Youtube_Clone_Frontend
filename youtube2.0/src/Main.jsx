import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import SearchBar from './Components/search';
import API_KEY from './config/default.json'

const ApiKey = API_KEY;

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: []
        };
    }
    render() {
        return (
            <div>
                <SearchBar/>

                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/BtfucXjju0k?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
            </div>
        );
    }
}

export default App;
