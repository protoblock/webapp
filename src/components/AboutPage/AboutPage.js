/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AboutPage.less';
import withStyles from '../../decorators/withStyles';
import PageHeading from '../PageHeading';

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
    let text = (
      <div>
        <h1>About</h1>
        <h2>Gain the Fantasy Edge</h2>
      </div>
    );
    return (
      <div className="AboutPage">
        <div className="AboutPage-container">
          <PageHeading text={text} logoSize='sm' />
          <p>Trading Football is a p2p game played by making weekly projections on how many fantasy points each NFL player will score. Users are able to make projections for every offensive player (QB, RB, WR, TE), Kickers, and Defense/Special Teams; you can submit as many or as few projections as you want. After each game, the Trading Football protocol awards Fantasy Bits to those Fantasy Names who submitted the most accurate projections.  The Fantasy Names with the highest Fantasy Bit balances are prominently displayed on our Leaderboard.</p>
          <p>The Trading Football Leaderboard will showcase those Fantasy players that have mastered the art of Fantasy Football.  Want to know who has made the best projections for the last month? Or who is the best at making QB projections? Trading.Football’s Leaderboard can be sorted based on time period, position, team, NFL player, or even Fantasy Name. Using our program gives hard core Fantasy players a significant edge in lineup decisions.</p>
          <h5> Level 2 - Coming Soon</h5>
          <p>That’s not all, soon you will be able to use your Fantasy Bits in our game’s Level 2 to speculate on NFL players’ weekly and season fantasy point totals. You’ll be able to earn Fantasy Bits if you buy when a player is undervalued and sell when a player is overvalued. With Trading.Football, there will be no offseason; you’ll always be able to use your fantasy skills to earn Fantasy Bits and trade them for value.</p>
          <p>Even though Fantasy Football has been legally recognized as a game of skill, in classic Fantasy Football, only the top player wins and collects money. Trading Football removes some of the risk and luck and replaces it with opportunity. Every time you hear an expert saying “I want to buy this player,” or “I want to sell this player.” - You haven’t been able to do it until now. If you want to buy, sell, and trade players in March or April... You’re going to need FantasyBits!</p>
          <p></p>
        </div>
      </div>
    );
  }

}

export default AboutPage;
