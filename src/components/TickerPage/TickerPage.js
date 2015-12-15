/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TickerPage.less';
import withStyles from '../../decorators/withStyles';
import PlayersTable from '../PlayersTable/PlayersTable';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import Ticker from '../Ticker/Ticker';
import agent from 'superagent';
import Config from '../../utils/Config';

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

@withStyles(styles)
class TickerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'players': [],
      'playerId': 0,
	  'sortBy': 'PRICE',
	  'team': 'ALL TEAMS',
	  'position': 'ALL POSITIONS'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
	this.getPlayers();
	setInterval(this.getPlayers.bind(this), 600000);
  }
  
  getPlayers() {
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

      let playerId = players[0].playerId;
	  let sortBy = this.state.sortBy, team = this.state.team, position = this.state.position;

      if (getParameterByName('playerId') !== '') {
        playerId = getParameterByName('playerId');
      }
      if (getParameterByName('sortBy') !== '') {
        sortBy = getParameterByName('sortBy');
      }
      if (getParameterByName('team') !== '') {
        team = getParameterByName('team');
      }
      if (getParameterByName('position') !== '') {
        position = getParameterByName('position');
      }

      this.setState({
        'players': players,
        'playerId': playerId,
		'sortBy': sortBy,
		'team': team,
		'position': position
      });
    });
  }

  handleChangePlayer(playerId) {
    window.history.pushState("", "", "/?playerId=" + playerId + '&sortBy=' +
		this.state.sortBy + '&team=' + this.state.team + '&position=' + this.state.position);

    this.setState({
      'playerId': playerId
    });
  }
  
  handleChangeFilter(sortBy, team, position) {
	window.history.pushState("", "", "/?playerId=" + this.state.playerId + '&sortBy=' +
		sortBy + '&team=' + team + '&position=' + position);

    this.setState({
		'sortBy': sortBy,
		'team': team,
		'position': position
    });
  }

  render() {
    return (
      <div className="TickerPage">
        <div className="TickerPage-container">
          <div className='leftContainer'>
            <PlayersTable players={this.state.players}
					sortBy={this.state.sortBy}
					team={this.state.team}
					position={this.state.position}
					changePlayer={this.handleChangePlayer.bind(this)}
					changeFilter={this.handleChangeFilter.bind(this)} />
          </div>

          <div className='rightContainer'>
            <PlayerDetail playerId={this.state.playerId} />
          </div>
	  
          <div className='bottomTicker'>
            <Ticker />
          </div>

        </div>
      </div>
    );
  }

}

export default TickerPage;
