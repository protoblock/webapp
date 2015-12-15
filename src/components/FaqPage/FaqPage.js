/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FaqPage.less';
import withStyles from '../../decorators/withStyles';
import PageHeading from '../PageHeading';

@withStyles(styles)
class FaqPage extends React.Component{

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
    let title = 'FAQ';
    this.context.onSetTitle(title);
    let text = (
      <div>
        <h1>FAQ</h1>
        <h2>Improve Your Game</h2>
      </div>
    );
    return (
      <div className="FaqPage">
        <div className="FaqPage-container">
          <PageHeading text={text} logoSize='sm' />

          <h2>Frequently Asked Questions</h2>
		  

<h4>What is Satoshi Fantasy?</h4>
<p>Satoshi Fantasy, LLC is a leading technology company and pioneer in distributed fantasy football. Recognizing a need for a truly accurate and predictable source of data for fantasy projections and results, Satoshi Fantasy’s mission is to disrupt the industry by creating proven, decentralized prediction markets for fantasy sports. As a result, it is leveling the playing field for fantasy sports fans and giving all users a smarter way to make lineup decisions. Trading.Football, the company’s flagship fantasy football product, is the world’s first blockchain based prediction market for fantasy football results.</p>

<h4>What is Trading.Football?</h4>
<p>Trading.Football is the world’s first prediction market for fantasy football results.  The groundbreaking platform delivers the first gamified forwards exchange for buying and selling fantasy football players, generating the most accurate source available today for player valuations. Fantasy football players can finally feel confident in making lineup decisions, because Trading.Football is all they need to earn the ultimate in bragging rights!</p>

<h4>What is a prediction market?</h4>
<p>Prediction markets tap into the collective intelligence of crowds to forecast the outcome of events. Operating similarly to exchange-traded markets, prediction markets are created when individuals buy or sell based on what they see as the probability of an event to take place. Studies suggest that prediction markets are among the most accurate tools to forecast future events when they maintain enough trading volume and are based on profit and loss motivators – even when profit of loss isn’t tied to real currency.  For more information on prediction markets, visit: <a href='https://en.wikipedia.org/wiki/Prediction_market'>Wikipedia</a></p>

<h4>Why should fantasy football players use Trading.Football?</h4>
<p>Trading.Football provides a single source for the most accurate, real-time data on NFL player valuations for fantasy football, helping all users make smarter lineup decisions.  Users can simply visit <a href='https://trading.football'>trading.football</a> to view up-to-date NFL player prices, stats and charts generated from Trading.Football’s FantasyTicker.  Users can also participate in the Trader community by visiting <a href='https://trading.football/downloads'>downloads</a> to download the desktop program for Windows and Mac.</p>
 
<p>Whether actively involved on the platform making projections and trades, or simply looking for the most up-to-date stats and values for your lineup, Trading.Football offers something for all fantasy football players!</p>

<h4>What makes Trading.Football different from other sites?</h4>
<p>Despite an overabundance of information sources, the fantasy football industry lacks a truly accurate, predictable source of data on NFL player performance. Most often, the majority of fantasy football fans make lineup decisions based on gut decision, random advice from friends, stale ranking lists or painstakingly gathering information from multiple paid services. Trading.Football aims to change that by leveling the playing field and giving all fantasy football fans a smarter way to make lineup decisions.</p>

<p>Trading.Football’s revolutionary market intelligence is powered by the community’s action of projecting weekly point totals for more than 500 NFL players and trading those players on an open, gamified exchange. Satoshi Fantasy introduces blockchain technology to fantasy football for the first time, utilizing proven protocol to fuel the decentralized predictive market of Trading.Football. NFL player prices, stats and charts generated from Trading.Football are displayed in a streaming FantasyTicker that users can follow to receive the most accurate, market-driven intel in the fantasy football industry.</p>

<h4>Who plays Trading.Football?</h4>
<p>Trading.Football is designed for all fantasy football fans, from experts to casual players. The platform’s foundation is made up of a Trader community that make projections on players’ fantasy results, and based on the accuracy of their projections are rewarded tokens in the form of FantasyBits. Traders risk their hard-earned FantasyBits in an attempt to profit by buying when a player is undervalued and selling when a player is overvalued. The act of buying and selling with profit and loss, even on a gamified exchange, creates an efficient market, which generates an NFL player’s price that reflects all relevant information. Traders can demonstrate their raw fantasy skills by directly speculating on or against a fantasy football player’s production. And all fantasy players looking for an edge during their season long league and playoffs can finally stop refreshing fantasy websites for the latest intel on player news. Follow Trading.Football’s FantasyTicker at https://trading.football/ for the most up-to-date stats and values for NFL players and receive automated tweets on market moves by following <a href='https://twitter.com/TF_Ticker'>@TF_Ticker</a> and <a href='https://twitter.com/SatoshiFantasy'>@SatoshiFantasy</a>.</p>

<h4>What is the Trading.Football Fantasy Ticker?</h4>
<p>The collective intelligence of the Trader community powers the Trading.Football FantasyTicker, displaying a streaming source of prices, stats and charts for more than 500 NFL players. The FantasyTicker is updated in real-time and automated tweets are sent instantly from <a href='https://twitter.com/TF_Ticker'>@TF_Ticker</a> once market moves are detected.</p>

<h4>How do I become a Trader on Trading.Football?</h4>
<p>Anyone can be a Trader on Trading.Football, but the most successful represent the best of the best in fantasy expertise. Simply download the Trading.Football desktop program for Windows or Mac to get started and showcase your true fantasy skills to the world: <a href='https://trading.football/downloads'>downloads</a>.</p>

<h4>Why is Trading.Football launching so late in the 2015 season?</h4>
<p>Version 1 of Trading.Football went live at the start of the 2015 NFL season on September 7th and since then we’ve built a loyal community of Traders on the platform making projections on NFL players and earning FantasyBits. On December 15th, just in time for the fantasy football playoffs, we launched Version 2 of Trading.Football which includes the ability to buy, sell and hedge NFL player results as well as follow the streaming Trading.Football fantasy ticker.</p>

<p>The FantasyBit protocol was publicly announced Week 1 of the 2014 NFL season, and the initial software was released one year later on September 7th for Week 1 of the 2015 NFL season.</p>
  
<h4>Will Trading.Football continue to show data for NFL players in the offseason?</h4>
<p>Yes, with Trading.Football there is no offseason. Traders in the Trading.Football community can actively buy, sell and hedge NFL player results, and casual players can follow FantasyTicker all year long. Expect to see market moves around key moments in the NFL offseason: combine, draft, start of training camp, preseason, etc.</p>

<h4>How does Trading.Football use Blockchain technology?</h4>
<p>Trading.Football utilizes blockchain technology to secure and verify the community’s projections and reach distributed consensus on football player results and FantasyBit rewards. FantasyBits are rare, with 100 FantasyBits minted for every fantasy point scored each week by football players. FantasyBits can only be earned with raw fantasy football skills, which is determined by Trading.Football’s groundbreaking “Proof-of-Skill” consensus algorithm. FantasyBits act solely as tokens on the Trading.Football platform and cannot be traded for real currency. The FantasyBit protocol was publicly announced Week 1 of the 2014 NFL season, and the initial software was released one year later on September 7th for Week 1 of the 2015 NFL season.</p>
<p>The Trading.Football platform is built on open source software. The protocol is detailed in the original Satoshi Fantasy white paper and the open source C++11 code on GitHub: <a href='https://github.com/SatoshiFantasy/fantasybit'>fantasybit</a>.</p>

<h4>What are FantasyBits and why do I want them?</h4>
<p>FantasyBits are a cryptographically-secured token that are unforgeable and owned by Traders on the Trading.Football platform. Traders earn FantasyBits based on the accuracy projecting weekly point totals for more than 500 NFL players. FantasyBits are a form of tokens that Traders use to buy, sell and hedge NFL player results. Traders risk their hard-earned FantasyBits in an attempt to profit by buying when a player is undervalued and selling when a player is overvalued.</p>

<h4>Can FantasyBits be traded in for real money?</h4>
<p>No, FantasyBits are not tradable for real currency. They are tokens that Traders use to buy and sell NFL players on the Trading.Football platform.</p>

<h4>What is the difference between Bitcoin and FantasyBits?</h4>
<p>FantasyBits use some of the concepts created by Satoshi Nakamoto, the founder of Bitcoin, however they are significantly different than Bitcoins. Unlike Bitcoin, FantasyBits act solely as tokens on the Trading.Football platform and cannot be traded for real currency.</p>

<p>For more questions on Trading.Football, or for support inquiries, contact <a href='mailto://info@satoshifantasy.com'>info@satoshifantasy.com</a></p>
		  
        </div>
      </div>
    );
  }

}

export default FaqPage;
