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
                       this is where the comments would show up.   
              </textarea>
            </form>
          </div>
        );
    }
}

export default CommentForm;


