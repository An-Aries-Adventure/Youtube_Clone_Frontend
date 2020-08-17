import React from 'react'
import { Col } from 'react-bootstrap';


const CurrentVideo = (props) =>  {
    return(
        <div id="overlay">
             <iframe
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    allowfullscreen="allowfullscreen"
                    src ={`https://www.youtube.com/embed/${props.videoId}`}
                    frameBorder="0"></iframe>
        </div>

    )

}

export default CurrentVideo;