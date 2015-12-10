/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TickerPage.less';
import withStyles from '../../decorators/withStyles';
import PlayersTable from '../PlayersTable/PlayersTable';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import Ticker from '../Ticker/Ticker';
import agent from 'superagent';

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
      'playerId': 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    agent.get('https://stagingapp.trading.football:4545/playerquotes')
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

      if (getParameterByName('playerId') !== '') {
        playerId = getParameterByName('playerId');
      }

      this.setState({
        'players': players,
        'playerId': playerId
      });
    });
  }

  handleChangePlayer(playerId) {
    window.history.pushState("", "", "/ticker?playerId=" + playerId);

    this.setState({
      'playerId': playerId
    });
  }

  render() {
    return (
      <div className="TickerPage">
        <div className="TickerPage-container">
          <div className='leftContainer'>
            <PlayersTable players={this.state.players} changePlayer={this.handleChangePlayer.bind(this)} />
          </div>

          <div className='rightContainer'>
            <PlayerDetail playerId={this.state.playerId} />
          </div>

          <div className='bottomTicker'>
            <Ticker players={this.state.players} />
          </div>
        </div>
      </div>
    );
  }

}

export default TickerPage;
