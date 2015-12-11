/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Ticker.less';
import withStyles from '../../decorators/withStyles';
import Config from '../../utils/Config';
import agent from 'superagent';

@withStyles(styles)
class Ticker extends Component {
  constructor(props) {
	  super(props);
	  
	  this.state = {
		  'players': []
	  };
	  
      this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  
  componentDidMount() {
	this.updateTicks();
    setInterval(this.updateTicks.bind(this), 480000);
  }
  
  updateTicks() {
	agent.get(Config.apiURL + '/playerquotes')
    .set('Accept', 'application/json')
    .end((err, res) => {
      let players = res.body.map((datum) => {
        let team = datum.team === null ? 'N/A' : datum.team;
        let pos = datum.pos === null ? 'N/A' : datum.pos;

        let playerName = datum.firstname + ' ' + datum.lastname;

        return {
          'playerId': datum.playerid,
          'playerName': playerName,
		  'team': datum.team,
		  'pos': datum.pos,
          'price': datum.last,
          'volume': datum.volume,
          'change': datum.change
        };
      });
	  
	  this.setState({
		 'players': players 
	  });
	});
  }
	
  getTicks() {
    let players = this.state.players;
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

export default Ticker;
