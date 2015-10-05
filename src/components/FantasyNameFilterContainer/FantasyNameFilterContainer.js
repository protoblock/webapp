/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FantasyNameFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import FantasyNameActions from '../../actions/FantasyNameActions';
import {FormControls, Input, ButtonGroup, DropdownButton,
  MenuItem} from 'react-bootstrap';
@withStyles(styles)
class FantasyNameFilterContainer extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  updateBoardWeek(eventKey) {
    FantasyNameActions.updateSortWeek(eventKey);
    let query = '?';
    if (this.props.position != '') {
      query += 'position=' + this.props.position + '&';
    }
    if (eventKey != '') {
      query += 'week=' + eventKey;
    }
    FantasyNameActions.getPlayer(this.props.path, query);
  }

  updateBoardPosition(eventKey) {
    FantasyNameActions.updateSortPosition(eventKey);
    let query = '?';
    if (eventKey == '') {
      query += 'position=' + eventKey + '&';
    }
    if (this.props.sortWeek != '') {
      query += 'week=' + this.props.sortWeek;
    }
    FantasyNameActions.getPlayer(this.props.path, query);
  }

  getPositionItems(currentPosition) {
    let positions = ['any position', 'QB', 'DEF', 'RB', 'K', 'WR', 'TE'];
    let rows = [];
    for (let i = 0; i < positions.length; ++i) {
      if (currentPosition != positions[i]) {
        if (positions[i] == 'any position'){
          rows.push(
            <MenuItem eventKey='' onSelect='updateBoardPosition()'>{positions[i]}</MenuItem>
          );
        } else {
          rows.push(
            <MenuItem eventKey={positions[i]} onSelect='updateBoardPosition()'>{positions[i]}</MenuItem>
          );
        }
      }
    }
    return rows;
  }

  getWeekItems(currentWeek, sortWeek) {
    let rows = [];
    if (sortWeek != 'any week'){
      rows.push(
        <MenuItem eventKey='' onSelect='updateBoardWeek()'>Any Week</MenuItem>
      );
    }
    for (let i = currentWeek; i > 0; --i) {
      if (i != sortWeek){
        rows.push(
          <MenuItem eventKey={i} onSelect='updateBoardWeek()'>Week {i}</MenuItem>
        );
      }
    }
    return rows;
  }

  render() {
    let pTitle = this.props.position;
    let wTitle = this.props.sortWeek;
    return (
      <div className="FantasyNameFilterContainer">
        <div className="FantasyNameFilterContainer-container">
          <form className='form-inline FantasyNameFilterContainer-form'>
          <Input
            type='text'
            className='FantasyNameFilter-field'
            label='FantasyName: '
            value={this.props.name}/>
          <FormControls.Static
            type='text'
            className='FantasyNameFilter-field'
            label='FantasyBits: '
            value={this.props.balance}/>
          </form>
        </div>
        <div>
          <h4>Sort By:</h4>
          <ButtonGroup>
            <DropdownButton title={pTitle}>
              {this.getPositionItems(this.props.position)}
            </DropdownButton>
            <DropdownButton title={wTitle}>
              {this.getWeekItems(this.props.currentWeek, this.props.sortWeek)}
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    );
  }

}

export default FantasyNameFilterContainer;
