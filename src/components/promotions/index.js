import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './promotions.css';



class Promotions extends Component {
  constructor(props){

    super(props);
    
    this.state = {};
  }

    componentWillMount() {

        let request = new XMLHttpRequest();
        request.open('GET', 'http://jst.edchavez.com/api/promo/', true);
        request.onload = function () {
    
        // Begin accessing JSON data here
        let promotions = JSON.parse(this.response);
        console.log(promotions);
    
        if (request.status >= 200 && request.status < 400) {
            promotions.forEach(promo => {
                const promos = document.createElement('div');
                promos.setAttribute('class', 'promos');
    
        // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = promo.promotionName;

        // Create a p and set the text content to the film's description
            const startDate = document.createElement('p');
            const endDate = document.createElement('p');
            const promoAmt = document.createElement('p');
            startDate.textContent = `Start: ${promo.start}`; // Limit to 300 chars
            endDate.textContent = `End: ${promo.end}`; // End with an ellipses
            promoAmt.textContent = `Must buy at-least ${promo.minimumOrderValue}`;
            
    
        // Append the cards to the container element
                container.appendChild(promos);
    
        // Each card will contain an h1 and a p
                promos.appendChild(h1);
                promos.appendChild(startDate);
                promos.appendChild(endDate);
                promos.appendChild(promoAmt);
            });
            } else {
                return;
        }
    }
    
    request.send();
    
    
    const promotions = document.getElementById('promotions');
    
    const container = document.createElement('div');
    container.setAttribute('class','container');
    
    promotions.appendChild(container);;


        }

        
  render() {
    return (
       <BrowserRouter>
        <div>
            
        </div>
       </BrowserRouter>

    );
  }
}



export default Promotions;
