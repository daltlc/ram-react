import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './App.css';
import Inventory from '../inventory';
import Shipping from '../shipping';
import Promotions from '../promotions';
import Demo from '../demo';
import DemoLink from '../demo-link';


class App extends Component {
  constructor(props){

    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/' render={props => {
              return <DemoLink/>;
            }}/>
            <Route exact path='/' render={props => {
              return <Inventory/>;
            }}/>
            <Route exact path='/' render={props => {
              return <Promotions/>;
            }}/>
            <Route exact path='/' render={props => {
              return <Shipping/>;
            }}/>
            <Route exact path='/demo-post' render={props => {
              return <Demo/>;
            }}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;