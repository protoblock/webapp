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
import DownloadPage from '../DownloadPage';
import FaqPage from '../FaqPage';
import RulesPage from '../RulesPage';
import AboutPage from '../AboutPage';
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
      case /\/$/.test(this.props.path):
        component = <LeaderBoardPage query={this.props.query}/>;
        break;

      case /\/downloads/.test(this.props.path):
        component = <DownloadPage />;
        break;

      case /\/fantasy\/players\/.+\/awards$/.test(this.props.path):
        component = <FantasyNamePage path={this.props.path}/>;
        break;
      case /\/(about)/.test(this.props.path):
        component = <AboutPage />;
        break;
      case /\/faq/.test(this.props.path):
        component = <FaqPage />;
        break;
      case /\/rules/.test(this.props.path):
        component = <RulesPage />;
        break;
    }

    return component ? (
      <div className="wrapper">
        <Header />
        {component}
        <Footer />
      </div>
    ) : <LeaderBoardPage />;
  }

}

export default App;
