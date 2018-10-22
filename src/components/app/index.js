import {Component} from 'react';
import React from 'react';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import './App.css';
import Inventory from '../inventory';
import InitialCheckout from '../initialCheckout';
import $ from 'jquery';
import axios from 'axios';
import Header from '../header';
import Products from '../products';


class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      items: [],
      cart: [],
      totalItems:0,
      totalAmount:0,
      quantity:1,
      shippingMethods:[],
      cartBounce:false,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.sumTotalItems = this.sumTotalItems.bind(this);
    // this.sumTotalAmount = this.sumTotalAmount.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
    // this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  
  }
  

  getProducts(){  
    let url = 'http://jst.edchavez.com/api/inventory/getInventory/';
    axios.get(url).then(response =>{
      this.setState({
        items: response.data,
      });
      console.log(response.data);
    });
  }
  componentWillMount() {
    this.getProducts();
  }

  handleAddToCart(selectedItems){
    let cartItem = this.state.cart;
    let itemID = selectedItems.ItemID;
    let itemQty = selectedItems.quantity;
    if(this.checkItems(itemID)){
      let index = cartItem.findIndex(x => x.id === itemID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(itemQty);
      this.setState({
        cart:cartItem
      });
    }else{
      cartItem.push(selectedItems);
    }

    this.setState({
      cart:cartItem,
      cartBounce:true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce:false,
          quantity:1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sunTotalAmount(this.state.cart);
  }

  handleRemoveProduct(itemID,e){
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === itemID);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sunTotalAmount(this.state.cart);
    e.preventDefault();
  }

  checkProduct(itemID){
    let cart = this.state.cart;
    return cart.some(function(item){
      return item.id === itemID;
     });
  }

  sumTotalItems(){
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }

  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for(var i = 0;i<cart.length;i++){
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount:total
    });
  }

  updateQuantity(qty){
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }



  render() {
    return (
      <div className="container">
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        {/* <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        /> */}
      </div>
    );
  }
}



export default App;
