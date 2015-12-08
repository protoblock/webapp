/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <span className="Header-brandTxt">Trading Football</span>
          <span><a className='Header-link' href='http://localhost:3000/ticker'>Player Quotes</a></span>
        </div>
      </div>
    );
  }
}

export default Header;
