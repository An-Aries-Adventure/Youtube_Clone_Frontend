import React from 'react';
import axios from 'axios'
import {Component} from 'react';
import SearchBar from './Components/search';
import API_KEY from './config/default.json'
import YTSearch from 'youtube-api-search';



const ApiKey = API_KEY;

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: []
        };
        this.getYTvideos('React Tutorials')
    }

    getYTvideos(term) {
      YTSearch({key: ApiKey, term: term}, (data) => {
        this.setState({
          videos: data
        })
      })
    }
  
      // $.axios({
      //     url: "https://www.googleapis.com/youtube/v3/videos/search",
      //     key: 'ApiKey',
      //     type: 'get',
      //     contentType: 'json',
      //     success: function (data, textStatus, jQxhr) {
      //         console.log(data.items);
      //     },
      //     error: function (jQxhr, textStatus, errorThrown) {
      //         console.log(errorThrown)
      //     }
      // })


      // componentDidMount() {
      //   axios.get('https://www.googleapis.com/youtube/v3/videos/search&key=ApiKey')
      //   .then(response => {
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      // }
        

    

    render() {
        return (
            <div>
                <SearchBar/>

                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    src="https://youtu.be/BtfucXjju0k"
                    frameborder="0">
                </iframe>
            </div>
        );
    }
}

export default App;
