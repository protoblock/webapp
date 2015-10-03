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

  updateBoard(eventKey) {
    LeaderBoardActions.updateSortWeek(eventKey);
    LeaderBoardActions.updateLeaders('?week=' + eventKey);
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
    let title = "Week " + this.props.sortWeek

    return (
      <div className="LeaderBoardFilterContainerPage">
      <h4>Sort:</h4>
        <ButtonGroup>
            <DropdownButton title={title}>
              {this.getWeeks()}
            </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }

}

export default LeaderBoardFilterContainer;
