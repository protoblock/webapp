/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayersTable.scss';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
import {Table} from 'react-bootstrap';


@withStyles(styles)
class PlayersTable extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
  }

  handleClick(playerId) {
    this.props.changePlayer(playerId);
  }

  getRows() {
    let data = this.props.players.map((datum) => {
      let trClass = '';

      if (datum.change > 0) {
        trClass = 'tableRowUp';
      }
      else if (datum.change < 0) {
        trClass = 'tableRowDown';
      }
      else {
        trClass = 'tableRow';
      }

      return (
        <tr className={trClass}>
          <td className='tableCell'><span className='link' onClick={this.handleClick.bind(this, datum.playerId)}>{datum.playerName}</span></td>
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
      <div className="PlayersTable">
        <div className="PlayersTable-container">
          <h1 className='heading'>Players</h1>
          {tbl}
        </div>
      </div>
    );
  }
}

export default PlayersTable;
