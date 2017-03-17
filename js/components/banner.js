import React, { Component } from 'react';
import styles from '../styles/banner';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="head-top">
                        <div className="navigation">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                                    <nav className="cl-effect-11">
                                        <ul className="nav navbar-nav">
                                            <li><a href="home" data-hover="Home">Home</a></li>
                                            <li className="dropdown">
                                                <a href="#" data-hover="Products" className="dropdown-toggle" data-toggle="dropdown" style={styles.transparentBackground}>Products</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="S315CNC" className="subMenuItem">S315CNC</a></li>
                                                    <li><a href="S200DR" className="subMenuItem">S200DR</a></li>
                                                    <li><a href="S315DR" className="subMenuItem">S315DR</a></li>
                                                    <li><a href="S200TGI" className="subMenuItem">S200TGI</a></li>
                                                    <li><a href="S315TGI" className="subMenuItem">S315TGI</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="documentation" data-hover="Documentation">Documentation</a></li>
                                            <li><a href="partners" data-hover="Partners">Partners</a></li>
                                            <li><a href="contacts" data-hover="Contacts">Contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </nav>
                        </div>


                    </div>
                    <div className="logo">
                        <h1><a href="home">Unitech <span>-</span> Troyan Ltd.</a></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;