import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './App.css';
import Inventory from '../inventory';
import InitialCheckout from '../initialCheckout';

class App extends Component {
  constructor(props){

    super(props);

    this.state = {

    };

  }
  




  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <div>
        <Route exact path='/' render={props => {
              return <Inventory/>;
            }}/>

            <InitialCheckout/>
        </div>
       </BrowserRouter>
      </div>
    );
  }
}



export default App;
