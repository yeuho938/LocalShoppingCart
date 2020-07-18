import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import DetailItem from './DetailItem';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: JSON.parse(localStorage.getItem("ds_products")),
        }
    }
    displayDetail(id){
        var product;
        const {products} = this.state;
        for(var i=0; i<products.length; i++){
            if(products[i].id == id){
              product =  <DetailItem item = {products[i]} />
                break;
            }
        }
        return product;
        
    }
    
    render() {
        var id = this.props.match.params.id;
        return (
            <div>
               <h1> {this.displayDetail(id)} </h1>
            </div>
        );
    }
}

export default withRouter(Detail);