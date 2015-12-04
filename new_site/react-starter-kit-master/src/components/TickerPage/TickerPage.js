/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TickerPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TickerPage extends Component {
  render() {
    const title = 'Ticker';
    //this.context.onSetTitle(title);
    return (
      <div className="TickerPage">
        <div className="TickerPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default TickerPage;
