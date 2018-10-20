import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import Promotions from '../promotions';



const Checkout = () => {
    return(
      <button id='quick-play' onClick = {() =>{
        console.log('clicked');

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
            h1.textContent = promo.start;

    // Append the cards to the container element
            container.appendChild(promos);

    // Each card will contain an h1 and a p
            promos.appendChild(h1);
        });
        } else {
            return;
    }
}

request.send();


const promotions = document.getElementById('promotions');

const container = document.createElement('div');
container.setAttribute('class','container');

promotions.appendChild(container);
    
        }}>
      
        Checkout


      </button>
  
    );
  };
  
  export default Checkout;
