import React, { Component } from 'react'
import { NavLink, Link} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to=" "className="navbar-brand" >Congthanh</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/Home" activeClassName="active" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/san-pham" activeClassName="active" className="nav-link" >Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/manaUser" activeClassName="active" className="nav-link" >User</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to=" "className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to=" "className="dropdown-item" >Action</Link>
                                    <Link to=" "className="dropdown-item" >Another action</Link>
                                    <div className="dropdown-divider" />
                                    <Link to=" "className="dropdown-item" >Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" activeClassName="active" className="nav-link" >Contact</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </nav>

            </div>

        )
    }
}
