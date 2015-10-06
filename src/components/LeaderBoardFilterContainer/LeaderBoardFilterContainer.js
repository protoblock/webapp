/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LeaderBoardFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import LeaderBoardActions from '../../actions/LeaderBoardActions';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

@withStyles(styles)
class LeaderBoardFilterContainer extends React.Component{

  constructor(props) {
    super(props);
  }

  updateBoardWeek(eventKey) {
    LeaderBoardActions.updateSortWeek(eventKey);
    let query = '?';
    if (this.props.position != '') {
      query += 'position=' + this.props.position + '&';
    }
    if (eventKey != '') {
      query += 'week=' + eventKey;
    }
    LeaderBoardActions.getLeaders(query);
  }

  updateBoardPosition(eventKey) {
    LeaderBoardActions.updateSortPosition(eventKey);
    let query = '?';
    if (eventKey != '') {
      query += 'position=' + eventKey + '&';
    }
    if (this.props.sortWeek != '') {
      query += 'week=' + this.props.sortWeek;
    }
    LeaderBoardActions.getLeaders(query);
  }

  getPositionItems(currentPosition) {
    let positions = ['all positions', 'QB', 'DEF', 'RB', 'K', 'WR', 'TE'];
    let rows = [];
    for (let i = 0; i < positions.length; ++i) {
      if (currentPosition != positions[i]) {
        rows.push(
          <MenuItem eventKey={positions[i]} onSelect={this.updateBoardPosition.bind(this)}>{positions[i]}</MenuItem>
        );
      }
    }
    return rows;
  }

  getWeekItems(currentWeek, sortWeek) {
    let rows = [];
    if (sortWeek != 'all weeks'){
      rows.push(
        <MenuItem eventKey='all weeks' onSelect={this.updateBoardWeek.bind(this)}>Any Week</MenuItem>
      );
    }
    for (let i = currentWeek; i > 0; --i) {
      if (i != sortWeek){
        rows.push(
          <MenuItem eventKey={i} onSelect={this.updateBoardWeek.bind(this)}>Week {i}</MenuItem>
        );
      }
    }
    return rows;
  }

  getWeeks() {
    let rows = [];

    for (let i = this.props.currentWeek; i > 0; i--) {
      if (i != this.props.sortWeek){
        rows.push(<MenuItem eventKey={i} onSelect={this.updateBoard}>Week {i}</MenuItem>);
      }
    }
    return rows;
  }

  render() {
    let wTitle = "Week " + this.props.sortWeek;
    let pTitle = this.props.sortPosition;

    return (
      <div className="LeaderBoardFilterContainerPage">
      <h4>Sort:</h4>
        <ButtonGroup>
            <DropdownButton title={wTitle}>
              {this.getWeekItems()}
            </DropdownButton>
            <DropdownButton title={pTitle}>
              {this.getPositionItems()}
            </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }

}

export default LeaderBoardFilterContainer;
