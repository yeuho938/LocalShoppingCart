import React, { Component} from 'react';
import './Addproduct.css';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Productitem extends Component{
    
    constructor (){
        super();
        this.state = {
            products: JSON.parse(localStorage.getItem("ds_products")),
        }
        if(!this.state.products){
            this.state.products = [];
        }
    }
  
render(){
    return(
    <div className="ProductItem">
        <div id ='content'>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id='cont'>
            <center>
              <div className="thumbnail">
                  <img src= {'image/'+ this.props.item.image} />
                    <div className="caption">
                        <h3>{this.props.item.title}</h3>
                        <p>
                        </p><h3><NumberFormat value={this.props.item.price} displayType={'text'} thousandSeparator={true} /> đ</h3>
                        <p />
                        <p>
                        <div>
                    <button onClick={this.props.onItemClick} className="btn btn-danger"> Buy </button> 
                    <button  className="btn btn-danger"><Link to ={'/product/' + this.props.item.id} id='deta'> Detail</Link> </button>
                    </div>
                    </p>                   
                </div>
                </div>
                </center>
            </div>
        </div>  
    </div> 
    );
}
}
export default Productitem;
