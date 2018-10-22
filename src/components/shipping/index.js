import React from 'react';

import {Component} from 'react';

import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './shipping.css';

class Shipping extends Component {
    constructor(props){
  
      super(props);
      
      this.state = {};
    }
  
      componentWillMount() {
  
          let request = new XMLHttpRequest();
          request.open('GET', 'http://jst.edchavez.com/api/shipping', true);
          request.onload = function () {
      
          // Begin accessing JSON data here
          let shippingMethods= JSON.parse(this.response);
          console.log(shippingMethods);
      
          if (request.status >= 200 && request.status < 400) {
              shippingMethods.forEach(shipping => {
                  const shippings = document.createElement('div');
                  shippings.setAttribute('class', 'shipping');
      
          // Create an h1 and set the text content to the film's title
              const h1 = document.createElement('h1');
              h1.textContent = shipping.shipOptionName;
  
          // Create a p and set the text content to the film's description
              const shipOptionId = document.createElement('p');
              const carrierName = document.createElement('p');
              const shipCost = document.createElement('p');
              shipOptionId.textContent = `ShipOption: ${shipping.shipOptionId}`; // Limit to 300 chars
              carrierName.textContent = `Carrier: ${shipping.carrierName}`; // End with an ellipses
              shipCost.textContent = `Shipping Cost ${shipping.shipCost}`;
              
      
          // Append the cards to the container element
                  container.appendChild(shippings);
      
          // Each card will contain an h1 and a p
                  shippings.appendChild(h1);
                  shippings.appendChild(shipOptionId);
                  shippings.appendChild(carrierName);
                  shippings.appendChild(shipCost);
              });
              } else {
                  return;
          }
      }
      
      request.send();
      
      
      const shippingMethods = document.getElementById('shipping');
      
      const container = document.createElement('div');
      container.setAttribute('class','container');
      
      shippingMethods.appendChild(container);;
  
  
          }
  
          
    render() {
      return (
        <div className="Shipping">
         <BrowserRouter>
          <div>
          </div>
         </BrowserRouter>
        </div>
      );
    }
  }
  
  
  
  export default Shipping;
  