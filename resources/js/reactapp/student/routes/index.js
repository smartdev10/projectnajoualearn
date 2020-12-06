import React from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Modules from "./Modules/index";
import Messages from "./Messages/index";

const App = ({match}) => {

    const location = useLocation()
    return (
        <div>
         <div className="py-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
                    <li className="breadcrumb-item"><a href="#"><span className="fas fa-home"></span></a></li>
                    <li className="breadcrumb-item"><a href="#">{match.url.replace('/','')}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{location.pathname.split('/').pop()}</li>
                </ol>
            </nav>
            <div className="d-flex justify-content-between w-100 flex-wrap">
                <div className="mb-3 mb-lg-0">
                    <h1 className="h4">{location.pathname.split('/').pop()} list</h1>
                </div>
            </div>
        </div>
        <Switch>
            <Route path={`${match.url}/modules`} component={Modules}/>
            <Route path={`${match.url}/messages`} component={Messages}/>
            <Redirect to={`${match.url}/modules`} />
        </Switch>
    </div>
    )
};

export default App;
