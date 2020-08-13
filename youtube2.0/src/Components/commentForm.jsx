import React, { Component } from 'react';

class MyForm extends Component {
    render() {
      return (
        <form id="commentForm">
          
          <p>Enter your comment:</p>
          <input
            type="text" placeholder="comment here..."
          />
        </form>
      );
    }
  }

  export default MyForm;
