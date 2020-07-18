import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.item.title}</td>
            <td><img src ={'image/' +this.props.item.image} width='150px' height='150px' /> </td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.quantity}</td>
            </tr>
        );
    }
}

export default Payment;