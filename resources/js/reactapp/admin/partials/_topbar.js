import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
function _topbar() {

   const history = useHistory()
   const onLogout = (e) => {
     e.preventDefault()
     axios.post('/logout', { hello: 'world' })
     .then(()=>{
      history.go('/login')
     }).catch(()=>{
      history.go('/login')
     })
   }

   useEffect(()=>{

   },[])

    return (
      <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
      <div className="container-fluid px-0">
        <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
          <div className="d-flex align-items-center">
            <button id="sidebar-toggle" className="sidebar-toggle me-3 btn btn-icon-only btn-lg btn-circle d-none d-md-inline-block"><span className="fas fa-bars"></span></button>
            <form className="navbar-search form-inline" id="navbar-search-main">
              <div className="input-group input-group-merge search-bar">
                  <span className="input-group-text" id="topbar-addon"><span className="fas fa-search"></span></span>
                  <input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a className="nav-link text-dark me-lg-3 icon-notifications dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="icon icon-sm">
                  <span className="fas fa-bell bell-shake"></span>
                  <span className="icon-badge rounded-circle unread-notifications"></span>
                </span>
              </a>
              <div className="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <div className="list-group list-group-flush">
                  <a href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a>
                  <a href="/pages/calendar.html" className="list-group-item list-group-item-action border-bottom border-light">
                    <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src="/assets/img/team/profile-picture-1.jpg" className="user-avatar lg-avatar rounded-circle" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">Jose Leos</h4>
                              </div>
                              <div className="text-end">
                                <small className="text-danger">a few moments ago</small>
                              </div>
                          </div>
                          <p className="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                        </div>
                    </div>
                  </a>
                  <a href="/pages/tasks.html" className="list-group-item list-group-item-action border-bottom border-light">
                    <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src="/assets/img/team/profile-picture-2.jpg" className="user-avatar lg-avatar rounded-circle" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">Neil Sims</h4>
                              </div>
                              <div className="text-end">
                                <small className="text-danger">2 hrs ago</small>
                              </div>
                          </div>
                          <p className="font-small mt-1 mb-0">You've been assigned a task for "Awesome new project".</p>
                        </div>
                    </div>
                  </a>
                  <a href="/pages/tasks.html" className="list-group-item list-group-item-action border-bottom border-light">
                    <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src="/assets/img/team/profile-picture-3.jpg" className="user-avatar lg-avatar rounded-circle" />
                        </div>
                        <div className="col ps-0 m-2">
                          <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">Roberta Casas</h4>
                              </div>
                              <div className="text-end">
                                <small>5 hrs ago</small>
                              </div>
                          </div>
                          <p className="font-small mt-1 mb-0">Tagged you in a document called "First quarter financial plans",</p>
                        </div>
                    </div>
                  </a>
                  <a href="/pages/single-message.html" className="list-group-item list-group-item-action border-bottom border-light">
                    <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src="/assets/img/team/profile-picture-4.jpg" className="user-avatar lg-avatar rounded-circle" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">Joseph Garth</h4>
                              </div>
                              <div className="text-end">
                                <small>1 d ago</small>
                              </div>
                          </div>
                          <p className="font-small mt-1 mb-0">New message: "Hey, what's up? All set for the presentation?"</p>
                        </div>
                    </div>
                  </a>
                  <a href="/pages/single-message.html" className="list-group-item list-group-item-action border-bottom border-light">
                    <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src="/assets/img/team/profile-picture-5.jpg" className="user-avatar lg-avatar rounded-circle"/>
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">Bonnie Green</h4>
                              </div>
                              <div className="text-end">
                                <small>2 hrs ago</small>
                              </div>
                          </div>
                          <p className="font-small mt-1 mb-0">New message: "We need to improve the UI/UX for the landing page."</p>
                        </div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item text-center text-primary fw-bold rounded-bottom py-3">View all</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="media d-flex align-items-center">
                  <img className="user-avatar md-avatar rounded-circle" alt="Image placeholder" src="/assets/img/team/profile-picture-3.jpg" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Bonnie Green</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-0">
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-cog"></span>Settings</a>
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-envelope-open-text"></span>Messages</a>
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-user-shield"></span>Support</a>
                  <div role="separator" className="dropdown-divider my-0"></div>
                  <a onClick={(e)=> onLogout(e)} className="dropdown-item rounded-bottom fw-bold" href="#"><span className="fas fa-sign-out-alt text-danger"></span>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </nav>
    )
}

export default _topbar
