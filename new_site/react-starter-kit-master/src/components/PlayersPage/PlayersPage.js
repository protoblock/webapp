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
          'playerName': datum.firstname + ' ' + datum.lastname + ' (' + datum.team + ', ' + datum.pos + ')',
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

  getRows() {
    let url = 'http://localhost:3000/player?playerId=';
    let data = this.state.players.map((datum) => {
      let dest = url + datum.playerId;
      let trClass = '';

      if (datum.volume > 0) {
        trClass = 'tableRowUp';
      }
      else if (datum.volume < 0) {
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
          <td className='tableCell'>{datum.price}</td>
          <td className='tableCell'>{datum.volume}</td>
          <td className='tableCell'>{datum.change}</td>
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
            <th className='tableCell'>Price</th>
            <th className='tableCell'>Volume</th>
            <th className='tableCell'>Change</th>
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
          <br />
        </div>
      </div>
    );
  }
}

export default PlayersPage;
