/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
//import CurrentPeriod from '../CurrentPeriod';
@withStyles(styles)
class Header {
  render() {
    return (
      <div>
		<div>
			<Navigation />
		</div>
		<div className='status'>
			<span>Satoshi Fantasy Season Ends After Week 16, 2015 - Data as of 12/28/15 20:28:42.916</span>
		</div>
      </div>
    );

    /*return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className="Header-brandTxt">Your Company</span>
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <Button bsStyle='primary'>Test Button</Button>
            <h1 className="Header-bannerTitle">React</h1>
            <p className="Header-bannerDesc">Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );*/
  }

}

export default Header;
