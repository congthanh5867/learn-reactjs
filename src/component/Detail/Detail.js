import React, { Component } from 'react'
// import mydata from './../Products/data.json'
import productsApi from "../api/ProductsApi";
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.productsApi = new productsApi();
        this.state = {
            productsModel: {}
        };
    }

    getbyid = async () => {
        let proIds = this.props.match.params.id;
        let response = await this.productsApi.getById(proIds);
        if (response) {
            this.setState({
                productsModel: response
            }, () => console.log(this.state.productsModel));
        }
    }


    UNSAFE_componentWillMount = async () => {
        await this.getbyid();
    }


    render() {

        return (
            <div className="container_fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                           <img src="" alt=""/>
                            <div className="" >
                                {this.state.productsModel.proName}
                            </div>
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            content Right
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
