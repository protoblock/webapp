/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LeaderBoardFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

@withStyles(styles)
class LeaderBoardFilterContainer extends React.Component{

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  getWeeks() {
    rows = [];

    for (i = this.props.week; i > 0; i--) {
      rows.push(<MenuItem eventKey={i}>{i}</MenuItem>);
    }

    return rows;
  }

  render() {
    return (
      <div className="LeaderBoardFilterContainerPage">
        <div className="LeaderBoardFilterContainerPage-container">
        <ButtonGroup>
            <DropdownButton title="Week">
              {getWeeks()}
            </DropdownButton>
        </ButtonGroup>
        </div>
      </div>
    );
  }

}

export default LeaderBoardFilterContainer;
