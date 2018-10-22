import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './App.css';
import Inventory from '../inventory';
import Shipping from '../shipping';

class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      // promotionsOK:false,
      // shippingOK:false,
      // checkoutOK:false,

    };

    // this.getPromotionsOK = this.togglePromotionsOK.bind(this);
    // this.getShippingOK = this.toggleShippingOK.bind(this);
    // this.getCheckoutOK = this.toggleCheckoutOK.bind(this);

  }
    // togglePromotionsOK() {
    //   let toggleState = !this.state.inventoryOK;
    //   this.setState({ inventoryOK: toggleState});
    // }

    // getPromotionsOK(){
    //   return this.state.inventoryOK;
    // }

    // toggleShippingOK() {
    //   let toggleState = !this.state.shippingOK;
    //   this.setState({ shippingOK: toggleState});
    // }

    // getShippingOK(){
    //   return this.state.shippingOK;
    // }

    // toggleCheckoutOK() {
    //   let toggleState = !this.state.checkoutOK;
    //   this.setState({ checkoutOK: toggleState});
    // }

    // getCheckoutOK(){
    //   return this.state.checkoutOK;
    // }

  




  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <div>
        <Route exact path='/' render={props => {
              return <Inventory/>;
            }}/>
        <Route exact path='/' render={props => {
              return <Shipping/>;
            }}/>
            
        </div>
       </BrowserRouter>
      </div>
    );
  }
}



export default App;