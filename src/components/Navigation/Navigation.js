/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
//import 'bootstrap-webpack';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <Navbar brand='Trading Football' fixedTop={true} inverse toggleNavKey={0}>
          <Nav right eventKey={0}>
            <NavItem eventKey={1} href='/'>Home</NavItem>
            <NavItem eventKey={2} href='/downloads'>Download</NavItem>
            <NavItem eventKey={3} href='/rules'>Rules</NavItem>
            <NavItem eventKey={4} href='/faq'>FAQ</NavItem>
            <NavItem eventKey={5} href='http://forum.trading.football'>Forum</NavItem>
            <NavItem eventKey={6} href='/about' onClick={Link.handleClick}>About</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
