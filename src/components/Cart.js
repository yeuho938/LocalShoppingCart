import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import Payment from './Payment';
import {   Route, Link } from "react-router-dom";
class Cart extends Component {
    constructor(){
        super();
        this.state= {
            cart: JSON.parse(localStorage.getItem("cart")),
            payment:"",
            order: ""
        }
        if(!this.state.cart){
            this.state.cart = [];
        }
        this.Total = this.Total.bind(this);
        this.buttonPayment = this.buttonPayment.bind(this);
        this.buttonOrder = this.buttonOrder.bind(this);
    }
    onItemClick(key){
        return(event)=>{
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(key,1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({
            cart: JSON.parse(localStorage.getItem("cart"))
        })
        console.log(cart);
        }   
    }
    increaseQuantity(item){
        return(event)=>{
            let cart = JSON.parse(localStorage.getItem('cart'));
            let pro = cart.find((element)=> element.title === item.title);
            pro.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
             this.setState({
              cart: cart,
             });
        }
       
    }
    buttonPayment(){
        this.setState({
            payment:'payment'
        });
        console.log(this.state.payment);
    }
    buttonOrder(){
        this.setState({
            order:'order'
        });
        console.log(this.state.order);
    }
    onAddUser(event){
        event.preventDefault();
        let fullname = event.target['fullname'].value;
        let phone = event.target['phone'].value;
        let address = event.target['address'].value;
        
        let user = {
            fullname: fullname,
            phone: phone,
            address: address
          
        }

        let users = JSON.parse(localStorage.getItem("in_user"));
        if(!users){
            users = [];
        }
        users.push(user);
        localStorage.setItem("in_user", JSON.stringify(users));

        console.log(users);
    }

    decreaseQuantity(key, item){
            return(event)=>{
                let cart = JSON.parse(localStorage.getItem('cart'));
                let pro = cart.find((element)=> element.title === item.title);
                if(pro.quantity > 1){
                    pro.quantity -= 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    this.setState({
                        cart: cart,
                       });
                    console.log(pro.quantity);
                }else{
                    cart.splice(key,1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    this.setState({
                        cart: cart,
                       });
                }               
            }
    }

    Total(){
    let sum =0;
    let {cart} =this.state;
    for(let i=0; i< cart.length; i++){
        sum+= cart[i].quantity*cart[i].price;
    }
    return sum;
    }
    onOrder(){
        alert("Đặt hàng thanh công!");
    }
    render() {
        if(this.state.payment === 'payment'){
            return (
                <div className = "container-fuild">
                    <form onSubmit= {this.onAddUser} >
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <p><p className="btn btn-info">1</p> Nhập thông tin khách hàng:</p>
                        <div className="form-group">
                        <label >Fullname</label>
                        <input type="text" className="form-control" name ="fullname" placeholder="Input your name" />
                        </div>
                        <div className="form-group">
                        <label >Phone</label>
                        <input type="text" className="form-control" name ="phone" placeholder="Input your phone number" />
                        </div>
                        <div className="form-group">
                        <label >Address</label>
                        <input type="text" className="form-control" name ="address" placeholder="Input your address" />
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <p><p className="btn btn-info">2</p> Chọn hình thức thanh toán:</p>
					<select name="selecttt" className="form-control" id='select'>
						<option>Chọn hình thức thanh toán</option>
						<option value="1">Internet Banking/ATM nội địa </option>
						<option value="2">Thanh toán qua thẻ ngân hàng</option>
						<option value="3">Nhận hàng rồi thanh toán </option>
					</select>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                    <p><p className="btn btn-info">3</p> Xem lại đơn hàng</p>
                    <center>
                       <table border = "1" className="table table-hover" id='tablepay'>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {   
                                this.state.cart.map((item,key)=>
                                <Payment 
                                item = {item} 
                                key = {key}                               
                                />)
                            
                            }
    
                            <tr>Total : {this.Total()}</tr>
                            <tr></tr>
                        </table> 
                        <div id='dathang'>
                                 <button className='btn btn-success' onClick={this.buttonOrder}> Đặt hàng</button>
                        </div>
                        </center>
                    </div>
                    </form>
                    
                </div>
            );
        }else if(this.state.order==='order'){
            return(
                <h2>Hello</h2>
            )
          
        }
        else{
            return (
                <div className = "Cart">
                    <center><h3>Shopping cart</h3></center>
                        <table border = "1"  className="table table-hover">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Tempt price</th>
                            <th>Delete</th>
                            {   
                                this.state.cart.map((item,key)=>
                                <CartItem 
                                item = {item} 
                                key = {key} 
                                onDelete = {this.onItemClick(key)}
                                onIncrease ={this.increaseQuantity(item)}
                                onDecrease ={this.decreaseQuantity(key, item)}
                                />)
                            
                            }
    
                            <tr>Total : {this.Total()}</tr>
                            <tr></tr>
                        </table>
                        <div id='thanhtoan'>
                                <button className='btn btn-success' ><Link to='/product'>Tiếp tục mua hàng </Link> </button> <button className='btn btn-info' onClick = {this.buttonPayment}> Tiến hành thành toán</button>
                            </div>
                    </div>
            );
        }
       
    }
}

export default Cart;