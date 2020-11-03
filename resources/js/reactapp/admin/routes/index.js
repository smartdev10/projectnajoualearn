import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Students from "./Students/index";
import Departements from "./Departements/index";
import Formations from "./Formations/index";
import Modules from "./Modules/index";
import Courses from "./Cours/index";
import Annonces from "./Annonces/index";

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
                    <h1 className="h4">Departements List</h1>
                </div>
            </div>
        </div>
        <Switch>
            <Route path={`${match.url}/departements`} component={Departements}/>
            <Route path={`${match.url}/formations`} component={Formations}/>
            <Route path={`${match.url}/modules`} component={Modules}/>
            <Route path={`${match.url}/courses`} component={Courses}/>
            <Route path={`${match.url}/annonces`} component={Annonces}/>
            <Route path={`${match.url}/students`} component={Students}/>
        </Switch>
    </div>
    )
};

export default App;
