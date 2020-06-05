import React, { Component } from 'react'

export default class Course extends Component {
    render() {
        return (
            <div className="col-xs-6 col-lg-4" style={{ textAlign:'justify' }}>
                <h2>{this.props.children}</h2>
                <p>Khoa hoc lap trinh website bang php &amp; Mysql chi cung cap cho cac banj kien thuc laf chinh</p>
                <p><a href="!#" className="btn btn-default" role="button">Chi tiet</a></p>
            </div>
        )
    }
}
