import React from "react";
import {Link} from 'react-router-dom'

export const HorizontalNav = (props) => (

        <header style={{width:"100%", position:"fixed"}} className="main-header">
            <Link to='/app' className="logo">
                <span className="logo-mini"><b>F</b>HI</span>
                <span className="logo-lg"><b>EUBA</b>FHI</span>
            </Link>
            <nav className="navbar navbar-static-top">
                <a className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <img
                                    src="https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
                                    className="user-image" alt="User head header"/>
                                <span className="hidden-xs">{props.user[1]}</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img
                                        src="https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
                                        className="img-circle" alt="User head header box"/>

                                    <p>
                                        Maros Smrek
                                        <small>FHI IM3 - 5 years</small>
                                    </p>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <Link to={`/app/profile/${props.user[0]}`} className="btn btn-default btn-flat">Profile</Link>
                                    </div>
                                    <div className="pull-right">
                                        <button onClick={props.handleLogout} className="btn btn-default btn-flat">Sign out
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
);


