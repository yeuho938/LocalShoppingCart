import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Detail.css';

class DetailItem extends Component {
    render() {
        return (
            <div className='container' id='detail'>
                 <h1>Thông tin chi tiết sản phẩm</h1>
                <div className="row">
                    <p>
                    <img src = {'/image/'+ this.props.item.image} />
                    </p>
                    <p id='content'>
                     <h3> Tên truyện: {this.props.item.title}</h3>
                     <h3> Giá truyện: {this.props.item.price}</h3>
                     <h3> Thể loại: {this.props.item.category}</h3>
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(DetailItem);