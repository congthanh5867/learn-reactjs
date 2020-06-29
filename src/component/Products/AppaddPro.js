import React, { Component } from 'react'

export default class AppaddPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputPass: '',
            stlLevel: 0,
        }
    }



    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })

    }

    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        const { inputName, inputPass, stlLevel } = this.state;

        // var content = " ";
        // content += " Ten : " + inputName;
        // content += ", Pass: " + inputPass;
        // content += ", Level:" + stlLevel;

        // console.log(content);

        const item = {};
        // item.id = uuidv4();
        item.username = inputName;
        item.password = inputPass;
        item.level = parseInt(stlLevel);

        // console.log(item);
        this.props.add(item);
    }
    render() {
        return ( <
            div className = "col-xs-3 col-sm-3 col-md-3 col-lg-3" >
            <
            h3 style = {
                { textAlign: "center", backgroundColor: "#afafbd" } } > Them < /h3> <
            form onSubmit = {
                (e) => this.submitForm(e) } >
            <
            div className = "form-group" >
            <
            label htmlFor = "inputName" > Name < /label> <
            input type = "text"
            className = "form-control"
            id = "inputName"
            name = "inputName"
            placeholder = "Name"
            onChange = {
                (event) => this.isInputChange(event) }
            /> <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "inputPass" > Password < /label> <
            input type = "password"
            className = "form-control"
            id = "inputPass"
            name = "inputPass"
            placeholder = "1234 Main St"
            onChange = {
                (event) => this.isInputChange(event) }
            /> <
            /div> <
            div className = "form-group" >
            <
            select name = "stlLevel"
            value = { this.state.stlLevel }
            onChange = {
                (event) => this.isInputChange(event) }
            className = "form-control" >
            <
            option value = "" > Quyen < /option> <
            option value = "0" > Quan ly < /option> <
            option value = "1"
            select = "true" > Thanh vien < /option> <
            /select> <
            /div> <
            button type = "submit"
            className = "btn btn-primary" > Sent < /button> <
            /form> <
            /div>
        )
    }
}