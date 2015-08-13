/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withStyles from '../../decorators/withStyles';
import withContext from '../../decorators/withContext';
import Header from '../Header';
import Footer from '../Footer';
import LeaderBoardPage from '../LeaderBoardPage';
import FantasyNamePage from '../FantasyNamePage';
//import NotFoundPage from '../NotFoundPage';

import bootstrap from'../../../node_modules/bootstrap/dist/css/bootstrap.css';

@withContext
@withStyles(styles)
@withStyles(bootstrap)

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    let component;

    switch (true) {

      case /\/$/.test(this.props.path):
        component = <LeaderBoardPage />;
        break;

      case /\/fantasy\/players\/[0-9]+\/result\/[0-9]+$/.test(this.props.path):
        component = <FantasyNamePage path={this.props.path}/>;
        break;
  };

    return component ? (
      <div className="wrapper">
        <Header />
        {component}
        
      </div>
    ) : <LeaderBoardPage />;
  }

}

export default App;
