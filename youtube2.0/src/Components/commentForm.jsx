import React, {Component} from 'react';
import {Row} from 'react-bootstrap'

class CommentForm extends Component {
    render() {
        return (
          <div>
            <form id="commentForm">
                <input id="text" type="text" placeholder="comment here..."/>
                <Row><input id="subButComment" type="Submit"/></Row>
            

              <textarea id="commentForm"class="scrollabletextbox" name="note">
                          ?ADD AXIOS CALL LOGIC HERE?
              </textarea>
            </form>
          </div>
        );
    }
}

export default CommentForm;




// const CommentForm = (props) => {

//   let comment = document.getElementById("text").value

//   // axios.post(`http://localhost:5000/api/videos/${props.videoId}/comments`, {
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


//   // export default CommentForm;