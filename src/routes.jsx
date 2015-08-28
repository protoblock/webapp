import Router from 'react-router';
import React from 'react';
import App from './components/App';
import LeaderBoardPage from './components/LeaderBoardPage';
import FantasyNamePage from './components/FantasyNamePage';
import DownloadPage from './components/DownloadPage';
//import ContentPage from './components/ContentPage';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={LeaderBoardPage} />

    <Route handler={FantasyNamePage} path="fantasy/players/:fantasyName/awards"/>
    <Route handler={DownloadPage} path="downloads"/>
    {/*<Route handler={ContentPage} path="About"/>*/}
  </Route>
);

export default routes;
