/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AboutPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class AboutPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    let title = 'About';
    this.context.onSetTitle(title);
    return (
      <div className="AboutPage">
        <div className="AboutPage-container">
          <h1>About</h1>
          <p>Trading Football is a game where fantasy football players will be able to buy, sell, and hedge their weekly fantasy projections. Users are able to make projections for every offensive player (QB, RB, WR, TE, and kickers); you can submit as many or as few projections as you want. After every week in the regular season, FantasyBits are distributed to all players based on the accuracy of their projections. Those with the most FantasyBits, because they had the most accurate projections, are proudly recognized on the FantasyBits Leaderboard.</p>
          <p>Trading Football gives hard core fantasy traders a significant edge in lineup decisions and daily player values, by monitoring the real time price of their fantasy players on tickers and moving values charts. The current version of the Trading Football platform is limited to projections only. In our future release, FantasyBits will be tradable - thereby providing FantasyBits holders an opportunity to monetize the rewards from their accurate projections.</p>

        </div>
      </div>
    );
  }

}

export default AboutPage;
