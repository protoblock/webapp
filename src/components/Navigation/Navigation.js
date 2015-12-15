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
  
//Home/Player Ticker, Leaderboard*, Rules, Become a Trader, Forum, Blog, FAQ, About

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <Navbar brand='Trading.Football' fixedTop={true} inverse toggleNavKey={0}>
          <Nav right eventKey={0}>
            <NavItem eventKey={1} href='/'>Ticker</NavItem>
			<NavItem eventKey={2} href='/leaderboard'>LeaderBoard</NavItem>
            <NavItem eventKey={3} href='/trade'>Trade</NavItem>
            <NavItem eventKey={4} href='http://forum.trading.football'>Forum</NavItem>
			<NavItem eventKey={5} href='http://satoshifantasy.com'>Blog</NavItem>
            <NavItem eventKey={6} href='/faq'>FAQ</NavItem>
			<NavItem eventKey={7} href='/about' onClick={Link.handleClick}>About</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
