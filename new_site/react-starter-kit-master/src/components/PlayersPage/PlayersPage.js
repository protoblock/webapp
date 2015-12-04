/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayersPage.scss';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
import {Table} from 'react-bootstrap';


@withStyles(styles)
class PlayersPage extends Component {
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
    agent.get('https://stagingapp.trading.football:4545/playerquotes')
    .set('Accept', 'application/json')
    .end((err, res) => {
      let players = res.body.map((datum) => {
        return {
          'playerId': datum.playerid,
          'playerName': datum.firstname + ' ' + datum.lastname,
          'team': datum.team,
          'position': datum.pos,
          'bidSize': datum.bidsize,
          'bid': datum.bid,
          'ask': datum.ask,
          'askSize': datum.asksize,
          'lastSize': datum.lastsize,
          'lastTrade': datum.last,
          'upDown': datum.updownind
        };
      });

      this.setState({
        'players': players
      });
    });
  }

  getRows() {
    let url = 'http://localhost:3000/player?playerId=';
    let data = this.state.players.map((datum) => {
      let dest = url + datum.playerId;
      let indicator = '';
      let trClass = '';

      if (datum.upDown === 'U') {
        indicator = (<img className='upDownIndicator' src='UpIndicator.png' />);
        trClass = 'tableRowUp';
      }
      else if (datum.upDown === 'D') {
        indicator = (<img className='upDownIndicator' src='DownIndicator.png' />)
        trClass = 'tableRowDown';
      }
      else {
        trClass = 'tableRow';
      }

      return (
        <tr className={trClass}>
          <td className='tableCell'>
            <a className='link' href={dest}>{datum.playerName}</a>
          </td>
          <td className='tableCell'>{datum.team}</td>
          <td className='tableCell'>{datum.position}</td>
          <td className='tableCell'>{datum.bidSize}</td>
          <td className='tableCell'>{datum.bid}</td>
          <td className='tableCell'>{datum.ask}</td>
          <td className='tableCell'>{datum.askSize}</td>
          <td className='tableCell'>{datum.lastSize}</td>
          <td className='tableCell'>{datum.lastTrade}</td>
          <td className='tableCell'>{indicator}</td>
        </tr>
      );
    });

    return data;
  }

  buildTable() {
    let rows = this.getRows();

    return (
      <Table className='playerTable'>
        <thead>
          <tr className='tableHeading'>
            <th className='tableCell'>Player Name</th>
            <th className='tableCell'>Team</th>
            <th className='tableCell'>Position</th>
            <th className='tableCell'>Bid Size</th>
            <th className='tableCell'>Bid</th>
            <th className='tableCell'>Ask</th>
            <th className='tableCell'>Ask size</th>
            <th className='tableCell'>Last size</th>
            <th className='tableCell'>Last trade</th>
            <th className='tableCell'>&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }

  render() {
    let tbl = this.buildTable();

    return (
      <div className="PlayersPage">
        <div className="PlayersPage-container">
          <h1 className='heading'>Player Quotes</h1>
          {tbl}
        </div>
      </div>
    );
  }
}

export default PlayersPage;
