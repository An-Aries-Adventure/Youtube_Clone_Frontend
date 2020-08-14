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
