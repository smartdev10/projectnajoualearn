import React from 'react'
import { Link } from "react-router-dom";

export default function _sidenav() {
    return (
        <nav id="sidebarMenu" className="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
            <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar mr-4">
                    <img src="/assets/img/team/profile-picture-3.jpg" className="card-img-top rounded-circle border-white" alt="Bonnie Green"/>
                </div>
                <div className="d-block">
                    <h2 className="h6">Hi, Jane</h2>
                    <a href="/pages/examples/sign-in.html" className="btn btn-secondary text-dark btn-xs"><span className="mr-2"><span className="fas fa-sign-out-alt"></span></span>Sign Out</a>
                </div>
                </div>
                <div className="collapse-close d-md-none">
                    <a href="#sidebarMenu" className="fas fa-times" data-toggle="collapse"
                        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                        aria-label="Toggle navigation"></a>
                </div>
            </div>
            <ul className="nav flex-column">
               <li className="nav-item">
                <Link to="/admin/home" className="nav-link">
                    <span className="sidebar-icon"><i className="fas fa-home"></i></span>
                    <span>Home</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/departements" className="nav-link">
                    <span className="sidebar-icon"><i className="fas fa-building"></i></span>
                    <span>Departements</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/formations" className="nav-link">
                    <span className="sidebar-icon"><i className="fas fa-graduation-cap"></i></span>
                    <span>Formations</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/modules" className="nav-link">
                    <span className="sidebar-icon"><span className="fas fa-briefcase"></span></span>
                    <span>Modules</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/courses" className="nav-link">
                    <span className="sidebar-icon"><span className="fas fa-book"></span></span>
                    <span>Cours</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/annonces" className="nav-link">
                    <span className="sidebar-icon"><i className="fas fa-bullhorn"></i></span>
                    <span>Annonces</span>
                </Link>
                </li>
                <li className="nav-item">
                <span className="nav-link d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-app">
                    <span>
                        <span className="sidebar-icon"><i className="fas fa-chalkboard-teacher"></i></span> 
                         Formateurs
                        </span>
                    <span className="link-arrow"><span className="fas fa-chevron-right"></span></span> 
                </span>
                <div className="multi-level collapse show" role="list" id="submenu-app" aria-expanded="false">
                    <ul className="flex-column nav">
                        <li className="nav-item"><Link className="nav-link" to="/admin/teachers"><span><i className="fas fa-list"></i> List</span></Link></li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <span className="nav-link d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-pages">
                    <span>
                        <span className="sidebar-icon"><span className="fas fa-users"></span></span> 
                         Etudiants
                        </span>
                    <span className="link-arrow"><span className="fas fa-chevron-right"></span></span> 
                </span>
                <div className="multi-level collapse show" role="list" id="submenu-pages" aria-expanded="false">
                    <ul className="flex-column nav">
                        <li className="nav-item"><Link className="nav-link" to="/admin/students"><span><i className="fas fa-list"></i> List</span></Link></li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    )
}
