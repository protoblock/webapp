import Router from 'react-router';
import React from 'react';
import App from './components/App';
import LeaderBoardPage from './components/LeaderBoardPage';
import FantasyNamePage from './components/FantasyNamePage';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={LeaderBoardPage}/>

    <Route handler={FantasyNamePage} path="fantasy/players/:fnid/result/:week"/>
  </Route>
);

export default routes;
