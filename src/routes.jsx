import Router from 'react-router';
import React from 'react';
import App from './components/App';
import LeaderBoardPage from './components/LeaderBoardPage';
import FantasyNamePage from './components/FantasyNamePage';
import PlayerPage from './components/PlayerPage';
import DownloadPage from './components/DownloadPage';
import AboutPage from './components/AboutPage';
import FaqPage from './components/FaqPage';
import RulesPage from './components/RulesPage';
import TickerPage from './components/TickerPage';
import PlayerDetailPage from './components/PlayerDetailPage';
import TradePage from './components/TradePage';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={TickerPage} />

	<Route handler={LeaderBoardPage} path='leaderboard' />
    <Route handler={RulesPage} path='rules' />
	<Route handler={DownloadPage} path='downloads'/>
    <Route handler={FaqPage} path='faq' />
    <Route handler={AboutPage} path='about'/>
    <Route handler={TradePage} path='trade'/>

	
    <Route handler={PlayerDetailPage} path='player' />	
    <Route handler={FantasyNamePage} path='fantasy/players/:fantasyName/awards'/>
    <Route handler={PlayerPage} path='fantasy/nfl/:playerID/week/:week'/>
  </Route>
);

export default routes;
