import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Item extends Component {

    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }


    render() {
      
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/300x250" alt="" />
                    <div className="caption">
                        <h3>{this.props.children}</h3>
                        <p>Gia goc: {this.format_curency(this.props.data.unit_price)} VND</p>
                        <p>Khuyen mai :{this.format_curency(this.props.data.promotion_price)} VND</p>
                        <p>
                            <Link to=" " className="btn btn-primary" role="button">Mua</Link>
                            <Link to={"chi-tiet/" + this.props.id } className="btn btn-default">Chi tiet</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
