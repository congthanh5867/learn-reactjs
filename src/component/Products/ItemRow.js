import React, { Component } from 'react'

export default class ItemRow extends Component {


    Date = (str) => {
        return  Date(str.replace(/(\d+)\/(\d+)\/(\d+)/g, (_, a, b, c) => c + '-' + b + '-' + a))
    }
    render() {
        return (
            <tr>
                <th >{this.props.index + 1}</th>
                <td >{this.props.children}</td>
                <td >{this.props.level === 0 ? "Quan ly" : "Thanh vien"} </td>
                <td></td>
                <td style={{ margin: 0 }}>
                    <button className="btn btn-info" type="submit"  >Edit</button>
                    <button className="btn btn-danger">Dele</button>
                </td>
            </tr>
        )
    }
}
