import React, {Component} from 'react';
import {Row} from 'react-bootstrap'

class CommentForm extends Component {
    render() {
        return (
          <div>
            <form id="searchForm">

                <input id="text" type="text" placeholder="comment here..."/>
                <Row><input id="subButComment" type="Submit"/></Row>
            </form>

              <textarea class="scrollabletextbox" name="note">
                          ?ADD AXIOS CALL LOGIC HERE?
              </textarea>
          </div>
        );
    }
}

export default CommentForm;
