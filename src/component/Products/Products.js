import React, { Component } from 'react';


import productsApi from "../api/ProductsApi";
import Item from './Item'
import AppaddPro from './AppaddPro';
import AppTable from './AppTable';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.productsApi = new productsApi();
        this.state = {
            list: [],
            statusForm: true,
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

    mappingData = () => {
        const result = this.state.list.map((item, key) => {
            return <Item key={key} id={item.id} data={item}>{item.proName}</Item>
        });

        return result;
    }

    showformAdd = () => {
        if (this.state.statusForm) {
            // return <AppaddPro></AppaddPro>
            return <AppaddPro formToogle={(e) => this.changeStatusForm(e)} add={(item) => this.addUserAction(item)}></AppaddPro>
        }
    }

    changeStatusForm = (event) => {
        event.preventDefault();
        this.setState({
            statusForm: !this.state.statusForm
        })
    }
    addUserAction = (item) => {
        this.state.list.push(item);
        this.setState({
            list: this.state.list
        })
    }


    render() {
        return (


            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <label style={{ fontSize: 20 }}>Search</label>
                            <input className="form-control" placeholder="Search "></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        {/* {this.mappingData()} */}
                        <AppTable userdata={this.state.userdata} statusForm={this.state.statusForm} formToogle={(e) => this.changeStatusForm(e)} />
                        {this.showformAdd()}
                    </div>
                </div>
            </div>

        )
    }
}
