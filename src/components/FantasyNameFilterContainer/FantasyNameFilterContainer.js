/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FantasyNameFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import {FormControls, Input, ButtonGroup, DropdownButton,
  MenuItem} from 'react-bootstrap';
@withStyles(styles)
class FantasyNameFilterContainer {
  static propTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  };
  render() {
    let pTitle = 'Any Position';
    let wTitle = 'Any Week';
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
              <MenuItem eventKey="QB">QB</MenuItem>
            </DropdownButton>
            <DropdownButton title={wTitle}>
              <MenuItem eventKey={1}>Week 1</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    );
  }

}

export default FantasyNameFilterContainer;
