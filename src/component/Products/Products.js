import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'

import  productsApi  from "../api/ProductsApi";
import Item from './Item'
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.productsApi = new productsApi();
        this.state = {
            list: [],
        };
    }

    onList = async () => {
        let res = await this.productsApi.list()
        // console.log(res);
        if (res) {
            console.log(res)
            this.setState({
                list: res
            });
        }
    }

    UNSAFE_componentWillMount = async () => {
        await this.onList();
    }

    mappingData = ()=>{
        const result =  this.state.list.map((item,key) => {
             return <Item key={key} id={item.id} data={item}>{item.proName}</Item>
        });

        return result;
    }

    render() {
        return (
            <div className="row">
                {this.mappingData()}
            </div>
        )
    }
}
