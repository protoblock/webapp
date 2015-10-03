/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LeaderBoardFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

@withStyles(styles)
class LeaderBoardFilterContainer extends React.Component{

  constructor(props) {
    super(props);
  }

  getWeeks() {
    let rows = [];

    for (let i = this.props.week; i > 0; i--) {
      let eventKey = '\'' + i + '\'';
      rows.push(<MenuItem eventKey={eventKey}>Week {i}</MenuItem>);
    }
    return rows;
  }

  render() {
    return (
      <div className="LeaderBoardFilterContainerPage">
      <h4>Sort By:</h4>
        <ButtonGroup>
            <DropdownButton title="Week">
              {this.getWeeks()}
            </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }

}

export default LeaderBoardFilterContainer;
