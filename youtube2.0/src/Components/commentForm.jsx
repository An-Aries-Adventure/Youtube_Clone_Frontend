import React, {Component} from 'react';
import {Row} from 'react-bootstrap'

class CommentForm extends Component {
    render() {
        return (
            <form id="searchForm">

                <input id="commentbox" type="text" placeholder="comment here..."/>
                <Row><input id="subButComment" type="Submit"/></Row>
            </form>
        );
    }
}

export default CommentForm;


// const CommentForm = (props) => {

//   let comment = document.getElementById("text").value

//   axios.post(`http://localhost:5000/api/videos/${props.videoId}/comments`, {
//     "text": comment

//     }).then((res) => {
//         console.log('res', res)
//     }).catch((err) => {
//         console.log('err', err)
//     });


//   return (
//      alert("Nice! You have submitted a comment to this video!")
//   )
// }


//   export default CommentForm;