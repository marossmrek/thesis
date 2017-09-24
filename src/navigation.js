import React from "react";
import {Link} from 'react-router-dom'
import {User} from './Service/user-service';

export class Navigation extends React.Component {

    handleLogout() {
        this.logout();
    }

    async logout() {
        await User.logout();
        this.props.loggedOut('');
        window.location.href = "http://localhost:3000";
    }
    render() {

        return (
            <div>
                <header className="main-header">
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
                                        <span className="hidden-xs">{this.props.user[1]}</span>
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
                                                <Link to={`/app/profile/${this.props.user[0]}`} className="btn btn-default btn-flat">Profile</Link>
                                            </div>
                                            <div className="pull-right">
                                                <button onClick={this.handleLogout.bind(this)} className="btn btn-default btn-flat">Sign out</button>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img
                                    src="https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png"
                                    className="img-circle" alt=""/>
                            </div>
                            <div className="pull-left info">
                                <p>{this.props.user[1]}</p>
                                <a><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        <form className="sidebar-form" role="search">
                            <div className="input-group">
                                <input autoFocus={true} type="text" className="form-control"
                                       placeholder="Search..."/>
                            </div>
                        </form>
                        <ul className="sidebar-menu">
                            <li className="header">MAIN STUFF</li>
                            <li className="treeview">
                                <a>
                                    <i className="fa fa-dashboard"></i> <span>Study zone</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu" style={{display: "none"}}>
                                   <li><Link to='/app/timetable'> <i className="fa fa-circle-o"></i>
                                       Timetable</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </aside>
            </div>
        )
    }
}




