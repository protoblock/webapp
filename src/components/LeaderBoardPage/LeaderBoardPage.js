/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LeaderBoardPage.less';
import withStyles from '../../decorators/withStyles';
import LeaderBoardFilterContainer from '../LeaderBoardFilterContainer';
//import {players} from '../../../DummyData/fantasy-players-weekly.js';
import LeaderBoardStore from '../../stores/LeaderBoardStore';

function getLeadersState(){
  return {
    players: LeaderBoardStore.getLeaders()
  };
};

import {Table} from 'react-bootstrap';
@withStyles(styles)
class LeaderBoardPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = getLeadersState();
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  getTeamRows() {
    if (this.state.players.length > 0){
      return this.state.players.map((player) => {
        return (
          <tr>
            <td>{player.name}</td>
            <td>{player.score}</td>
            <td>{player.move}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan="3">
            Error loading leaders
          </td>
        </tr>
      )
    };

  };

  render() {
    let title = 'Paper Football';
    this.context.onSetTitle(title);


    let rows = this.getTeamRows();

    return (
      <div className="LeaderBoardPage">
        <div className="LeaderBoardPage-container">
        <h1>Leader Board</h1>
          <LeaderBoardFilterContainer/>
          <Table>
            <thead>
              <tr>
                <th>Fantasy Name</th>
                <th>FantasyBits</th>
                <th>Move</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

}

export default LeaderBoardPage;
