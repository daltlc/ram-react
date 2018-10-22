import React from 'react';
import {Component} from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './demo-link.css';



class DemoLink extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><Link to='/'>Post Demo</Link></li>
        </ul>
      </nav>
    );
  }
}

export default DemoLink;