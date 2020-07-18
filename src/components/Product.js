import React, { Component } from 'react';
import Productitem from './Productitem';
import './ProductItem.css';
class Product extends Component {
    constructor(){
        super();
        this.state={
            products: JSON.parse(localStorage.getItem("ds_products")),
            sortType: "asc",
            search: ''
        }
        if(!this.state.products){
            this.state.products = [];
        }
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onchange = this.onchange.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
      }
  
      handleClick(event){
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      onItemClick(item){
          return(event)=>{
            alert(" Thêm vào giỏ hàng thành công");
              let cart = JSON.parse(localStorage.getItem('cart'));
              if(!cart){
                  cart =[];
              }
              let oldItem = cart.find((element)=> element.title === item.title);
              if(oldItem){
                  oldItem.quantity+= 1;
              }
              else{
                  item.quantity = 1;
                  cart.push(item)
              }
              localStorage.setItem('cart',JSON.stringify(cart));
              console.log(cart);
          }
      }
      onClickEdit(id){

      }
      onchange(event) {
        event.preventDefault();
        var search = event.target["search"].value;
        this.setState({ search: search });
        console.log(this.state.search);
       };

    showProduct() {
        const { search } = this.state;
        const filteredProducts = this.state.products.filter(product => {
            return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        var listProduct = filteredProducts.map((item, index) =>
            <Productitem
                key={index}
                item={item}
                onItemClick = {this.onItemClick(item)}
                onEditClick = {this.onClickEdit(index)} 
            />);

        return listProduct;
    }

      sortByPriceAsc(){
           const {products,sortType} = this.state;
           const productsort = products.sort( (a, b)=>{ 
               const sapx = (sortType ==="asc") ? 1: -1;
               return sapx * a.price.localeCompare(b.price)
           })
           this.setState({
               products: productsort
           })
      }
      sortByPriceDesc(){
        const {products,sortType} = this.state;
        const productsort = products.sort( (a, b)=>{ 
            const sapx = (sortType ==="asc") ? 1: -1;
            return sapx * b.price.localeCompare(a.price)
        })
        this.setState({
            products: productsort
        })
      }
    render() {
            return (
              <div>
                <form  onSubmit={this.onchange}>
                <button className='btn btn-info' id="icon"><i class="fas fa-search"></i></button>
                 <input id="inputsearch" name ='search' type='text' placeholder='Search...'></input>
                </form>
                
                <ul>
                <button id ='sort' onClick = {this.sortByPriceAsc} className='btn btn-outline-info' >SX Giá tăng dần</button>
                <button id ='sort' onClick = {this.sortByPriceDesc} className='btn btn-outline-info' >SX Giá giảm dần</button>
                  {this.showProduct()}
                </ul>
              </div>
            );
         
    }
}

export default Product;