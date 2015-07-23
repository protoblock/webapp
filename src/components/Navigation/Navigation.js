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
        <Navbar brand='Paper Football' inverse toggleNavKey={0}>
          <Nav>
            <NavItem eventKey={0} href='/'>Home</NavItem>
            <NavItem eventKey={1} href='/download'>Download</NavItem>
            <NavItem eventKey={2} href='/about' onClick={Link.handleClick}>About</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;
