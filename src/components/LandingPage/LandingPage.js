
import React, { PropTypes } from 'react';
import styles from './LandingPage.less';
import withStyles from '../../decorators/withStyles';

import {Grid, Row, Col, Table} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';
import Link from '../../utils/Link';
import PageHeading from '../PageHeading';

@withStyles(styles)
class LandingPage extends React.Component{

  static propTypes = {
    query: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }


  getHeadingText(){
    return (
      <div>
        <h1>Launching Labor Day 2015!</h1>
      </div>
    );
  }



  render() {
    let title = 'Trading Football';
    this.context.onSetTitle(title);

    return (

      <div className="LandingPage">
        <div className="LandingPage-container">
          <PageHeading text={this.getHeadingText()} logoSize='lg' />
          <h3>Getting Started:</h3>
          <ol>
            <li>Starting Sept.8th, go to <a href="https://trading.football/"><b>https:&#47;&#47;trading.football&#47;</b></a>.</li>
            <li>Download Trading.Football software to your computer (Windows 64-bit).</li>
            <li>Claim a &quot;Fantasy Name&quot;-- this is your Trading Football alias.</li>
            <li>Make projections on NFL Players&#39; Week 1 fantasy point totals.</li>
            <li>Earn Fantasy Bits. Rise up the Leaderboard!!</li>
          </ol>
          <h5>Full details will be provided on our website by Sept 7th. Sneak peek: <a href="https://app.trading.football/">https:&#47;&#47;app.trading.football&#47;</a>.</h5>
          <p></p>
          {/*
            <h5>Support Hotline:</h5>
          <p>(650)822-2777</p>
          <p><a href="mailto:info@satoshifantasy.com">info@satoshifantasy.com</a></p>
          */}
          <h3>Gain The Fantasy Edge!</h3>
          <h5>What are Fantasy Bits?</h5>
          <p>Crypto tokens (digital currency), which follow the Satoshi Fantasy protocol. Each point scored by an NFL player will generate 100 fantasy bits.</p>
          <h5>How do I get Fantasy Bits?</h5>
          <p>Play trading football, and make weekly projections. Distribution is based on accuracy of weekly projections.</p>
          <h5>How many Fantasy Bits are there?</h5>
          <p>There are currently 0 fantasy bits in circulation.  After week 1, there will be around 200,000, these will be essentially split among Trading Football’s earliest adopters: you guys.</p>
          <h5>How many Fantasy Bits can I expect to win?</h5>
          <p>Each player is expected to get an equal share of pie, each week. The more players, the smaller the share. The size of the pie (the total amount of weekly bits awarded) will always remain relatively constant.</p>
          <ul>
            <li>So if there are 100 players in week 1, each of you will receive around 20,000 bits.</li>
            <li>If there are 1000 players in week 2, each player will receive 200 bits.</li>
            <li>By week 10 if there are 10,000 players, each player will only get 20 bits!!</li>
          </ul>
          <div className="LandingPage-container-piechart">
          </div>
          <h5>What can I do with Fantasy Bits?</h5>
          <p>Fantasy Bits are needed for Game Level 2: Trading. Coming soon, you will be able to leverage your fantasy bits by buying and selling weekly and season-long forward contracts on NFL players. This will enable hedging and speculating on fantasy football players directly!</p>
          <h5>What else do I get?</h5>
          <p>You have a unique chance to get a large quantity of fantasy bits and your name on the Leaderboard! And, you get a big THANK YOU!!</p>


        </div>
      </div>
    );
  }

}

export default LandingPage;
