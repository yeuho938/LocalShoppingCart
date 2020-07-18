import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link } 
from "react-router-dom";
import Addproduct from './components/Addproduct';
import Product from './components/Product';
import Cart from './components/Cart';
import Footerpage from './components/Footerpage';
import Detail from './components/Detail';

class App extends Component {
  constructor(){
    super();
    this.state ={
      menu: "product"
    }
    this.onProduct = this.onProduct.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onCart = this.onCart.bind(this);
    }
  onProduct(){
    this.setState({
      menu: "product"
    })
  }
  onAddProduct(){
    this.setState({
      menu: "add-product"
    })
  }
  onCart(){
    this.setState({
      menu: "cart"
    })
  }

  render(){
    return (
      <div className="container">
        <div className='row'>
          <Router>    
          <ul>
            <li>
              <Link to = '/product' > Product</Link>
            </li>
            <li>
              <Link to = '/addproduct' > Add product</Link>
            </li>
            <li>
              <Link to = '/cart' > Cart</Link>
            </li>
          </ul>
              {/* //them exact */}
              <Switch>
              <Route path='/product' exact> 
                <Product />
              </Route>

              <Route path='/addproduct'>
                <Addproduct />
              </Route>

              <Route path='/cart' exact> 
                <Cart />
              </Route>
              <Route path={'/product/:id'}>
                <Detail />
              </Route>
              </Switch>
                </Router>
            </div>
            <hr />

        <div className ="row" id = "footer" >
          <Footerpage />
        </div>
        
    </div>
    
    );
  }
  
}

export default App;
