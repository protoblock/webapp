import Router from 'react-router';
import React from 'react';
import App from './components/App';
import LeaderBoardPage from './components/LeaderBoardPage';
import FantasyNamePage from './components/FantasyNamePage';
import DownloadPage from './components/DownloadPage';
import AboutPage from './components/AboutPage';
import FaqPage from './components/FaqPage';
import RulesPage from './components/RulesPage';
import LandingPage from './components/LandingPage';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={App} path="/">
    {/*<DefaultRoute handler={LeaderBoardPage} />*/}
    <DefaultRoute handler={LandingPage} />
    <Route handler={FantasyNamePage} path="fantasy/players/:fantasyName/awards"/>
    <Route handler={DownloadPage} path="downloads"/>
    <Route handler={AboutPage} path="about"/>
    <Route handler={FaqPage} path="faq" />
    <Route handler={RulesPage} path="rules" />
  </Route>
);

export default routes;
