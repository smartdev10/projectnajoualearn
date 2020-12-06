import React, { memo } from "react";
import { Route , Switch , useRouteMatch , useLocation } from "react-router-dom";
import Messages from './messages'
import Tickets from './tickets'
import Teachers from './teachers'


const index = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <Switch>
        <Route path={`${match.url}/messages`} location={location}  component={Messages}/>
        <Route path={`${match.url}/tickets`} location={location}  component={Tickets}/>
        <Route path={`${match.url}`} location={location}  component={Teachers}/>
    </Switch>
  )
};

export default memo(index);
