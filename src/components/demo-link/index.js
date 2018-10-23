import React from 'react';
import {Component} from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './demo-link.css';



class DemoLink extends Component {
  render() {
    return(
      <nav>
        <ul>
          <button type="button" className="btn btn-success"><Link to='/'>Post Demo</Link></button>
        </ul>
      </nav>
    );
  }
}

export default DemoLink;