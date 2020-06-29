import React, { Component } from 'react'
import ItemRow from './ItemRow'

export default class AppTable extends Component {
    constructor(props) {
        super(props);

    }
    showButton = () => {
        if (!this.props.statusForm) {
            return <a className = "btn btn-success btn-sm"
            href = "them"
            role = "button"
            onClick = {
                (e) => this.props.formToogle(e)
            } > < i className = "fa fa-plus"
            aria - hidden = "true" / > Add < /a>
        } else {
            return <a className = "btn btn-danger btn-sm"
            href = "dong"
            role = "button"
            onClick = {
                (e) =>
                this.props.formToogle(e)
            } > < i className = "fa fa-close"
            aria - hidden = "true" / > X < /a>
        }
    }

    classTable = () => {
        if (!this.props.statusForm) {
            return "col-xs-12 col-sm-12 col-md-12 col-lg-12"
        } else {
            return "col-xs-8 col-sm-8 col-md-8 col-lg-8"
        }
    }
    mappingData = () => {
        const tableRow = this.props.userdata.map((item, key) => {
            return <ItemRow key = { key }
            index = { key }
            id = { item.id }
            level = { item.level } > { item.username } <
                /ItemRow>
        });
        return tableRow;
    }

    render() {
        return ( < div className = { this.classTable() } >
            <
            table className = "table table-bordered table-hover" >
            <
            thead >
            <
            tr align = "center" >
            <
            th scope = "col" > STT < /th> <
            th scope = "col" > Name < /th> <
            th scope = "col" > Quyen < /th> <
            th scope = "col" > Created_at < /th> <
            th scope = "col"
            className = "text-center"
            colSpan = { 2 } > { this.showButton() } <
            /th> < /
            tr > <
            /thead> <
            tbody id = "data-body" > {
                /* <ItemRow>
                                                                                                                   </ItemRow> */
            } { this.mappingData() } <
            /tbody> <
            tfoot >
            <
            tr align = "center" >
            <
            th scope = "col" >
            STT <
            /th> <
            th scope = "col" >
            Name <
            /th> <
            th scope = "col" >
            Quyen <
            /th> <
            th scope = "col" >
            Created_at <
            /th> <
            th scope = "col"
            className = "text-center"
            colSpan = { 2 } >
            option <
            /th> < /
            tr >
            <
            /tfoot> < /
            table >
            <
            /div>
        )
    }
}