import React, { Component } from 'react';
import './CartItem.css';
class CartItem extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.item.title}</td>
            <td><img src ={'image/' + this.props.item.image} width='150px' height='150px' /> </td>
            <td>{this.props.item.price}</td>
            <td><button onClick={this.props.onIncrease} className ='btn btn-success'>+</button> {this.props.item.quantity} <button className ='btn btn-success' onClick={this.props.onDecrease}>-</button></td>
            <td>{this.props.item.quantity*this.props.item.price} </td>
            <td> <button onClick= {this.props.onDelete} className ='btn btn-danger' > Delete </button></td>
            </tr>
            
        );
    }
}

export default CartItem;
