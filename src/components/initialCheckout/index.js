import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import Promotions from '../promotions';



const InitialCheckout = () => {
    return(
      <button id='quick-play' onClick = {() =>{
        console.log('clicked');

        //before button is cliked I need to select some things from inv, that will possibly update the state of the promos down below until 20.
        //once things are selected, hit checkout, will load those items you selected/if promo is applied/ then shows shipping methods
        //once shipping method is selected, either load or then hit a button to load final checkout, which displays, items you want, promo, 
        //price and selected shipping method.


        //submit, hides everything and just says thanks?
        //button to go back to beggining

    
        }}>
      
        Checkout


      </button>
  
    );
  };
  
  export default InitialCheckout;
