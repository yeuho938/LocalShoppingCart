import React, { Component } from 'react';
import './Footer.css';
class Footerpage extends Component {
    render() {
        return (
                <div className="container" >
                    <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img src="https://images.tuyensinh247.com/picture/article/2013/0216/lat-tung-trang-cuon-sach-cuoc-doi_1.jpg" width="150px" height="150px" />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id ="htkh"> 
                        <li>
                            <h2> Hỗ trợ khách hàng</h2>
                        </li>
                        <li>
                            <h4> Các câu hỏi thương gặp</h4>
                        </li>
                        <li>
                            <h4> Hướng dẫn hành toán</h4>
                        </li>
                        <li>
                            <h4> Hướng dẫn đặt hàng</h4>
                        </li>
                        <li>
                            <h4> Phương thức vận chuyển</h4>
                        </li>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="cs">
                        <li>
                            <h2> Chính sách</h2>
                        </li>
                        <li>
                            <h4> Chính sách đổi trả hàng</h4>
                        </li>
                        <li>
                            <h4> Chính sách bảo hành</h4>
                        </li>
                        <li>
                            <h4> Chính sách bảo mật</h4>
                        </li>
                        <li>
                            <h4> Điều khoản sử dụng</h4>
                        </li>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="tk">
                        <li>
                            <h2> Tài khoản của bạn</h2>
                        </li>
                        <li>
                            <h4> Thông tin cá nhân</h4>
                        </li>
                        <li>
                            <h4> Lịch sử giao dịch</h4>
                        </li>
                        <li>
                            <h4> Sách yêu thích</h4>
                        </li>
                        <li>
                            <h4> Sách đã mua</h4>
                        </li>
                    </div>
                    </div>
                </div>
         );
    }
}

export default Footerpage;