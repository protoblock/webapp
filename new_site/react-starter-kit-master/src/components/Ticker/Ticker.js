/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Ticker.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TickerPage extends Component {
  render() {
    return (
      <div className="Ticker">
        <div className="Ticker-container">
        	<div className='marquee'>
        		<span>
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
				</span>
			</div>
        </div>
      </div>
    );
  }

}

export default TickerPage;
