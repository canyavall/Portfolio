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
      products: {
         1: {img: tshirt1, title: 'White Basic', price: 10, discount: 1},
         2: {img: tshirt2, title: 'Unicorn power', price: 20, discount: 0 },
         3: {img: tshirt3, title: 'Superman', price: 20, discount: 3 },
         4: {img: tshirt4, title: 'Spring flower', price: 15, discount: 3 },
         5: {img: tshirt5, title: 'Wave zen', price: 25, discount: 2 },
         6: {img: tshirt6, title: 'Cartoon jedy', price: 35, discount: 0 },
      },
      cart: {},
      totalCart: 0,
      discount: {0: ["", 0],
                 1: [" 10%", 0.1],
                 2: [" 20%", 0.2],
                 3: [" 30%", 0.3]
              }
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
    totalCart += this.state.products[id].price - (this.state.products[id].price * this.state.discount[this.state.products[id].discount][1]);

    this.setState({cart, totalCart});
  }

  deleteFromCart = (id) => {
    let cart = {...this.state.cart };
    let totalCart = this.state.totalCart;
    if (cart[id] !== 1){
      cart[id]--;
    }else{
      delete cart[id];
    }
    totalCart -= this.state.products[id].price - (this.state.products[id].price * this.state.discount[this.state.products[id].discount][1]);

    this.setState({cart, totalCart});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className = "wrapper">
          <div className="list">
            <ProductGrid products = {this.state.products} addToCart = {this.addToCart} discountList = {this.state.discount}/>
          </div>
          <div className="table">
            <CartList products = {this.state.products} cartList = {this.state.cart} totalCart = {this.state.totalCart} deleteFromCart={this.deleteFromCart} discountList = {this.state.discount}/>
          </div>
        </div>
      </div>
    );
  }


}
