/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LeaderBoardFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';
@withStyles(styles)
class LeaderBoardFilterContainer {

  render() {
    return (
      <div className="LeaderBoardFilterContainerPage">
        <div className="LeaderBoardFilterContainerPage-container">
        <ButtonGroup>
            <DropdownButton title="All Time">
              <MenuItem eventKey='1'>Time 1</MenuItem>
              <MenuItem eventKey='2'>Time 2</MenuItem>
            </DropdownButton>
            <DropdownButton title="All">
              <MenuItem eventKey='1'>Search 1</MenuItem>
              <MenuItem eventKey='2'>Search 2</MenuItem>
            </DropdownButton>
            <input className='btn-group' type='text' label='Text' placeholder='All Positions - All Teams - All Players' />
          </ButtonGroup>
        </div>
      </div>
    );
  }

}

export default LeaderBoardFilterContainer;
