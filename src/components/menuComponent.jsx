
import React, { Component, Fragment } from 'react';
import { Route, Switch, Router, Redirect, Link } from "react-router-dom";
import {
    Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';
import dropDownItems from './dropDownOptions';

class MenuComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand >
                        React Bootstrap Example
             </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold" >Sample Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto">
                        </div>
                        <div className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select option
           </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {dropDownItems && dropDownItems.items.map((data, index) => {
                                            return (<React.Fragment>
                                                <Link className="dropdown-item" to={data.url}>{data.name}</Link>
                                               </React.Fragment>)
                                        })}
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </Fragment>
        )
    }
}
export default MenuComponent;
