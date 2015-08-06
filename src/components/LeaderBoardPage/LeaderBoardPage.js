/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LeaderBoardPage.less';
import withStyles from '../../decorators/withStyles';
import LeaderBoardFilterContainer from '../LeaderBoardFilterContainer';
//import {leaders} from '../../../DummyData/fantasy-leaders-weekly.js';
import LeaderBoardStore from '../../stores/LeaderBoardStore';
import LeaderBoardActions from '../../actions/LeaderBoardActions';
import Spinner from '../Spinner'

import {Table} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';
import Link from '../../utils/Link';

@withStyles(styles)
class LeaderBoardPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = LeaderBoardStore.getState();
    this.onChange = this.onChange.bind(this);
    this.currentWeek = 6;
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  componentDidMount() {
    LeaderBoardStore.listen(this.onChange);

    LeaderBoardActions.getLeaders();
  }

  componentWillUnmount() {
    LeaderBoardStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  getTeamRows() {
    if (this.state.leaders.length > 0){
      return this.state.leaders.map((player) => {
        let destination = "/fantasy/players/" + player.id + "/result/" + this.currentWeek;
        return (
          <tr>
            <td><a href={destination} onclick={Link.handleClick}>{player.name}</a></td>
            <td>{player.score}</td>
            <td>{player.move}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan="3">
            Error loading leaders: {this.state.errorMessage}
          </td>
        </tr>
      )
    }

  }

  buildTable() {
    let rows = this.getTeamRows();

    if (!this.state.leaders.length && !this.state.errorMessage){
      return (
        <Spinner />
      );
    } else {
      return (
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
      );
    }
  }

  render() {
    let title = 'Paper Football';
    this.context.onSetTitle(title);
    let table = this.buildTable();

    return (
      <div className="LeaderBoardPage">
        <div className="LeaderBoardPage-container">
          <h1>Leader Board</h1>
          <LeaderBoardFilterContainer/>
          {table}
        </div>
      </div>
    );
  }

}

export default LeaderBoardPage;
