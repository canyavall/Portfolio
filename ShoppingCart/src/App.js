import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ProductGrid from "./components/ProductGrid";
import CartList from "./components/CartList";
import tshirt1 from './img/tshirt1.jpg';
import tshirt2 from './img/tshirt2.jpg';
import tshirt3 from './img/tshirt3.jpg';
import tshirt4 from './img/tshirt4.jpg';
import tshirt5 from './img/tshirt5.jpg';
import tshirt6 from './img/tshirt6.jpg';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        { id: 1, img: tshirt1, title: 'White Basic', price: 10 },
        { id: 2, img: tshirt2, title: 'Unicorn power', price: 20 },
        { id: 3, img: tshirt3, title: 'Superman', price: 20 },
        { id: 4, img: tshirt4, title: 'Spring flower', price: 15 },
        { id: 5, img: tshirt5, title: 'Wave zen', price: 25 },
        { id: 6, img: tshirt6, title: 'Cartoon jedy', price: 35 },
      ],

      cart: {},
      totalCart: 0,
    }
  }

  addToCart = (id) => {
    let cart = {...this.state.cart };
    let totalCart = this.state.totalCart;
    if (cart[id] ){
      cart[id]++;
    }else{
      cart[id] = 1;
    }
    for (var i = 0; i < this.state.products.length; i++)
      if (this.state.products[i].id === id) totalCart += this.state.products[i].price;

    this.setState({cart, totalCart});
  }

  deleteFromCart = (id) => {
    let cart = {...this.state.cart };
    let totalCart = this.state.totalCart;
    if (cart[id] ){
      cart[id]--;
    }else{
      delete cart[id];
    }
    for (var i = 0; i < this.state.products.length; i++)
      if (this.state.products[i].id === id) totalCart -= this.state.products[i].price;

    this.setState({cart, totalCart});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className = "wrapper">
          <div className="list">
            <ProductGrid products = {this.state.products} addToCart = {this.addToCart}/>
          </div>
          <div className="table">
            <CartList products = {this.state.products} cartList = {this.state.cart} totalCart = {this.state.totalCart} deleteFromCart={this.deleteFromCart}/>
          </div>
        </div>
      </div>
    );
  }


}
