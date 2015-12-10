/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Ticker.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TickerPage extends Component {
  getTicks() {
    let players = this.props.players;
    let playerString = '';

    for (let i = 0; i < players.length; ++i) {
      let player = players[i];

      playerString += player.playerName + ' (' + player.team + ', ' + player.pos + ') : ' + player.price;

      if (i + 1 !== players.length) {
        playerString += ' - ';
      }
    }

    return (
      <span>{playerString}</span>
    );
  }

  render() {
    let ticks = this.getTicks();

    return (
      <div className="Ticker">
        <div className="Ticker-container">
        	<div className='marquee'>
            {ticks}
    	    </div>
        </div>
      </div>
    );
  }

}

export default TickerPage;
