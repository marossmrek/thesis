import React from "react";
import {Link} from 'react-router-dom'

export const VerticalNav = (props) => (

    <aside className="main-sidebar">
        <section className="sidebar">
            <div className="user-panel">
                <div className="pull-left image">
                    <img
                        src="https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png"
                        className="img-circle" alt=""/>
                </div>
                <div className="pull-left info">
                    <p>{props.user[1]}</p>
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
                        <li><Link to='/app/subjects'> <i className="fa fa-circle-o"></i>
                            Subjects</Link></li>
                    </ul>
                </li>
            </ul>
        </section>
    </aside>
);

