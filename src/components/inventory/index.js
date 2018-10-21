import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './inventory.css';
import InitialCheckout from '../initialCheckout';
import Promotions from '../promotions';
import $ from 'jquery';

class Inventory extends Component {
  constructor(props){

    super(props);
    
    this.state = {
    
    };
  }

    componentWillMount() {

        let request = new XMLHttpRequest();


            //Displaying Inventory

            request.open('GET', 'http://jst.edchavez.com/api/inventory/getInventory/', true);
            request.onload = function () {


            // Begin accessing JSON data here
            var data = JSON.parse(this.response);

            if (request.status >= 200 && request.status < 400) {
                data.items.forEach(items => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
                    const h1 = document.createElement('h1');
                    h1.textContent = items.name;

            // Create a p and set the text content to the film's description
                    const price = document.createElement('p');
                    const description = document.createElement('p');
                    const inStock = document.createElement('p');
                    items.description = items.description.substring(0, 300); // Limit to 300 chars
                    description.textContent = `${items.description}`; // End with an ellipses
                    price.textContent = `${items.price}`;
                    inStock.textContent = `InStock: ${items.inStock}`;

            // Append the cards to the container element
                    container.appendChild(card);

            // Each card will contain an h1 and a p
                    card.appendChild(h1);
                    card.appendChild(price);
                    card.appendChild(description);
                    card.appendChild(inStock);
                });
                } else {
                    console.log('error');
                }
            }

                request.send();


                const inventory = document.getElementById('inventory');

                const container = document.createElement('div');
                container.setAttribute('class','container');

                inventory.appendChild(container);


        }

        componentDidMount(){
            let total = 0;
            let card = document.getElementById("card");
            console.log(card);
            // card.onclick(function() {
            //     total++;
            //     console.log(total);
            }
        

        
  render() {
    return (

       <BrowserRouter>
        <div>
            <h1>Inventory and promos</h1>
            <InitialCheckout/>
            <Promotions/>
            
        </div>
       </BrowserRouter>
    );
  }
}



export default Inventory;
