import React, { memo } from "react";
import { Route , Switch , useRouteMatch , useLocation } from "react-router-dom";
import MainApp from './MainApp'


const App = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <Switch>
        <Route path={`/admin${match.url}`} location={location}  component={MainApp}/>
    </Switch>
  )
};

export default memo(App);
