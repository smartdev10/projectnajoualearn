import React from "react";
import App from "./routes/index";
import Nav from "./partials/_nav";
import Footer from "./partials/_footer";
import SideNav from "./partials/_sidenav";
import TopBar from "./partials/_topbar";


const MainApp = ({location , match}) => {

  return (
   <>
   <Nav />
    <div className="container-fluid bg-soft">
    <div className="row">
     <div className="col-12">
        <SideNav />
        <main className="content">
          <TopBar />
          <App match={match} location={location} />
          <Footer/>
        </main>
      </div>
     </div>
    </div>
   </>
  )
};

export default MainApp;
