/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './TradePage.less';
import withStyles from '../../decorators/withStyles';
import PageHeading from '../PageHeading';

@withStyles(styles)
class TradePage extends React.Component{

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
    let title = 'Trade';
    this.context.onSetTitle(title);
    let text = (
      <div>
        <h1>Trade</h1>
        <h2>Become a Trader on Trading.Football</h2>
      </div>
    );
    return (
      <div className="TradePage">
        <div className="TradePage-container">
			<PageHeading text={text} logoSize='sm' />
		  


<p>Any fantasy football player can be a Trader on Trading.Football, but the most skilled Traders  represent the best-of-the-best in fantasy expertise. Traders are the foundation of the Trading.Football community and power what is the world’s first prediction market for fantasy football results. By playing Trading.Football, Traders are able to demonstrate their raw fantasy skills to the world. Visit <a href='https://trading.football/downloads'>downloads</a> to download the Trading.Football desktop program for Windows or Mac to showcase your true fantasy skills to the world! </p>

<h3>How to Play</h3>
<p>Traders play Trading.Football by making projections on NFL player’s fantasy results. Traders are able to make projections for every offensive player - QB, RB, WR, TE, K.  Based on the accuracy of their projections, Traders are rewarded tokens in the form of FantasyBits and are recognized on the official Trading.Football <a href='https://trading.football/leaderboard'>leaderboard</a>.</p>

<p>Traders can then choose to use FantasyBits to trade NFL players on Trading.Football’s gamified exchange, buying when a player is undervalued and selling when a player is overvalued in attempt to profit and earn more FantasyBits. The act of buying and selling with profit and loss creates an efficient market, which generates each NFL player’s price that reflects all relevant information. Player prices, stats and charts generated from Trading.Football’s Traders are displayed in a streaming FantasyTicker that users can follow to receive the most accurate, market-driven intel in the fantasy football industry.</p>

<p>FantasyBits are rare, with 100 FantasyBits minted for every fantasy point scored each week by NFL players. FantasyBits can only be earned with raw fantasy football skills, which is determined by Trading.Football’s groundbreaking “Proof-of-Skill” consensus algorithm. FantasyBits act solely as tokens on the Trading.Football platform and cannot be traded for real currency.</p>

<h3>Download Today!</h3>
<p>Download the Trading.Football desktop program for Windows or Mac to get started on projecting and/or trading today by visiting: <a href='https://trading.football/downloads'>downloads</a></p>

<h3>Official Rules</h3>
<p>For more info on how to make projections on Trading.Football and how FantasyBits are awarded, visit: <a href='https://trading.football/rules'>rules</a>. For official rules on how to buy, sell and trade players on the Trading.Football’s gamified exchange, visit: <a href='http://forum.trading.football/'>forum</a></p>

<h3>Support</h3>
<p>Email: <a href='mailto://info@satoshifantasy.com'>info@satoshifantasy.com</a></p>
<p>Hotline: 650-822-2777</p>


			
			
			
			
			
        </div>
      </div>
    );
  }

}

export default TradePage;
