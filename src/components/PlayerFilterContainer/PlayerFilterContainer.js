/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './PlayerFilterContainer.less';
import withStyles from '../../decorators/withStyles';
import {FormControls, Input} from 'react-bootstrap';
@withStyles(styles)
class PlayerFilterContainer {
  static propTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  };
  render() {
    return (
      <div className="PlayerFilterContainer">
        <div className="PlayerFilterContainer-container">
          <form className='form-inline PlayerFilterContainer-form'>
          <Input
            type='text'
            className='PlayerFilter-field'
            label='Player: '
            value={this.props.name}/>
          <FormControls.Static
            type='text'
            className='PlayerFilter-field'
            label='Fantasy Points This Season: '
            value={this.props.points}/>
          <FormControls.Static
            type='text'
            className='PlayerFilter'
            label='Team: '
            value={this.props.team}/>
          <FormControls.Static
            type='text'
            className='PlayerFilter-field'
            label='Position: '
            value={this.props.position}/>
          </form>
        </div>
      </div>
    );
  }

}

export default PlayerFilterContainer;
