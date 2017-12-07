import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/application.scss'; // Import CSS -> ADDED IN THIS STEP
import hanSolo from '../assets/hansolo.png';

export default class WriteAway extends Component {
  render() {
    return (
      <div className="page-container">
        <h1>Hey</h1>
        <img src={ hanSolo }></img>
      </div>
    );
  }
}

render(<WriteAway />, document.getElementById('app'));
