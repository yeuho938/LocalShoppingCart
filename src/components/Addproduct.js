import React, {Component} from 'react';
import './Addproduct.css';
import NumberFormat from 'react-number-format';
class Addproduct extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedOption: null,
        products: JSON.parse(localStorage.getItem("ds_products"))
      };
      if(!this.state.products){
        this.state.products = [];
      }
     
    }
    onAddProduct(event){
        let id = 0;
        event.preventDefault();
        let title = event.target['title'].value;
        let price = event.target['price'].value;
        let image = event.target['image'].files.item(0).name;
        let cate = event.target["category"].value;
        

        let products = JSON.parse(localStorage.getItem("ds_products"));
        if(!products){
            products = [];
            id = 0;
        }else
        {
           id = products[products.length -1].id+1;
        }
        let product = {
            id : id,
            title: title,
            price: price,
            image: image,
            category: cate,
             }     
        products.push(product);
        localStorage.setItem("ds_products", JSON.stringify(products));

        console.log(products);
    }
    onDeleteItem(key){
      return(event)=> {
        let products = JSON.parse(localStorage.getItem("ds_products"));
        products.splice(key,1);

        localStorage.setItem("ds_products", JSON.stringify(products));
        this.setState({
            products: JSON.parse(localStorage.getItem("ds_products"))
        })
      }   
  }
  onClickedUpdate(item) {
    return (event) => {
      document.getElementById("title").value = item.title;
      document.getElementById("price").value = item.price;
      document.getElementById("category").value = item.category;
      document.getElementById("image").innerHTML =
      "<img src=image/" + item.image + ">";
      document.getElementById("submit").value = item.id;
    };
  }
 
    render(){
      const { selectedOption } = this.state;
      const { valueEdit } = this.state;
        return(
          
          <div class="container">
            
            <div class="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <form className="Addpduct" onSubmit={this.onAddProduct} >
            <legend><h1>Thêm sách</h1> </legend>
            <div className="form-group">
              <label >Title</label>
              <input onChange = {this.changeValue} type="text" className="form-control" name ="title" placeholder="Input Title" id='title' />
            </div>
            <div className="form-group">
              <label >Price</label>
              <input type="text" className="form-control" name ="price" placeholder="Input Price" id='price' />
            </div>
            <div className="form-group">
              <label >Image</label>
              <input type="file" className="form-control" name ="image" placeholder="Input link Image" id='image' />
            </div>
            <div className="form-group">
              <label >Category</label>
                <select id = "category" name = "category">
                    <option value="0">Select categories:</option>
                    <option value="Fairy tale">Fairy tale</option>
                    <option value="Fable">Fable</option>
                    <option value="Comic">Comic</option>
                    <option value="Funny story ">Funny story </option>                  
                </select>
            </div>
            <button type="submit" id ='submit' className="btn btn-primary">Submit</button>
          </form>
        </div>   
            </div>
            <div class="row">
            <center><h3> List product</h3></center>
                 <button id ='sort' onClick = { this.sortByPriceAsc } className='btn btn-outline-info'>SortByTitle(ASC)</button>
                    <table border = "1"  className="table table-hover">
                      <tr>
                        <td>ID</td>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        </tr>
                        {this.state.products.map((item, key) =>(
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img src={'image/'+item.image} /></td>
                            <td><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</td>
                            <td>{item.category}</td>
                            <td> <button onClick= {this.onDeleteItem(key)} className ='btn btn-danger' > Delete </button></td>
                            <td> <button onClick={this.onClickedUpdate(item)} className ='btn btn-danger' > Edit </button></td>
                          </tr>
                        )
                        )}
                        
                    </table>
            </div>
          </div>
          
       
        );
    }
}

export default Addproduct;
