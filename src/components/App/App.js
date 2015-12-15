/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import bootstrap from'../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from './App.less';
import withStyles from '../../decorators/withStyles';
import withContext from '../../decorators/withContext';
import Header from '../Header';
import Footer from '../Footer';
import LeaderBoardPage from '../LeaderBoardPage';
import FantasyNamePage from '../FantasyNamePage';
import PlayerPage from '../PlayerPage';
import DownloadPage from '../DownloadPage';
import FaqPage from '../FaqPage';
import RulesPage from '../RulesPage';
import AboutPage from '../AboutPage';

import TickerPage from '../TickerPage';
import PlayerDetailPage from '../PlayerDetailPage';

//import about from '../../content/about.jsx';

//import NotFoundPage from '../NotFoundPage';



@withContext
@withStyles(styles)
@withStyles(bootstrap)

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    let component;
    // Controls the routing
    switch (true) {
      case /\/leaderboard/.test(this.props.path.toLowerCase()):
        component = <LeaderBoardPage query={this.props.query}/>;
        break;
      case /\/downloads/.test(this.props.path.toLowerCase()):
        component = <DownloadPage />;
        break;
      case /\/fantasy\/nfl\/[0-9]+\/week\/[0-9]+$/.test(this.props.path.toLowerCase()):
        component = <PlayerPage path={this.props.path}/>;
        break;
      case /\/fantasy\/players\/.+\/awards$/.test(this.props.path.toLowerCase()):
        component = <FantasyNamePage query={this.props.query} path={this.props.path}/>;
        break;
      case /\/(about)/.test(this.props.path.toLowerCase()):
        component = <AboutPage />;
        break;
      case /\/faq/.test(this.props.path.toLowerCase()):
        component = <FaqPage />;
        break;
      case /\/rules/.test(this.props.path.toLowerCase()):
        component = <RulesPage />;
        break;
      case /\/$/.test(this.props.path.toLowerCase()):
        component = <TickerPage />;
        break;
      case /\/player/.test(this.props.path.toLowerCase()):
        component = <PlayerDetailPage />;
        break;
		
      default:
        component = <TickerPage />;
    }

    return component ? (
      <div className="wrapper">
        <Header />
        {component}
        <Footer />
      </div>
    ) : <LeaderBoardPage />;
  }

  /*
  
  render() {
    let component;
    // Controls the routing
    switch (true) {
      case /\/$/.test(this.props.path.toLowerCase()):
        component = <LeaderBoardPage query={this.props.query}/>;
        break;
      case /\/downloads/.test(this.props.path.toLowerCase()):
        component = <DownloadPage />;
        break;
      case /\/fantasy\/nfl\/[0-9]+\/week\/[0-9]+$/.test(this.props.path.toLowerCase()):
        component = <PlayerPage path={this.props.path}/>;
        break;
      case /\/fantasy\/players\/.+\/awards$/.test(this.props.path.toLowerCase()):
        component = <FantasyNamePage query={this.props.query} path={this.props.path}/>;
        break;
      case /\/(about)/.test(this.props.path.toLowerCase()):
        component = <AboutPage />;
        break;
      case /\/faq/.test(this.props.path.toLowerCase()):
        component = <FaqPage />;
        break;
      case /\/rules/.test(this.props.path.toLowerCase()):
        component = <RulesPage />;
        break;
      case /\/ticker/.test(this.props.path.toLowerCase()):
        component = <TickerPage />;
        break;
      case /\/player/.test(this.props.path.toLowerCase()):
        component = <PlayerDetailPage />;
        break;
		
      default:
        component = <LeaderBoardPage query={this.props.query}/>;
    }

    return component ? (
      <div className="wrapper">
        <Header />
        {component}
        <Footer />
      </div>
    ) : <LeaderBoardPage />;
  }
*/
  
}

export default App;
