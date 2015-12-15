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
		  
			<p>Trading.Football is disrupting the fantasy football industry!  All too often success is determined by luck but now all fantasy football players, from expert to casual players, can finally feel confident in making lineup decisions because Trading.Football is all they need to earn the ultimate in bragging rights!  No more painstakingly gathering information from multiple sources, following stale ranking lists, or going with your gut.  As the world’s first prediction market for fantasy football, Trading.Football’s groundbreaking platform is the most accurate source for fantasy football player valuations available today.</p>

			<p>Trading.Football’s revolutionary market intelligence is powered by a Trader community that make projections on players’ fantasy results, and based on the accuracy of their projections are rewarded tokens in the form of FantasyBits. Traders risk their hard-earned FantasyBits in an attempt to profit by buying when a player is undervalued and selling when a player is overvalued. The act of buying and selling with profit and loss, even on a gamified exchange, creates an efficient market, which generates a football player’s price that reflects all relevant information. Player prices, stats and charts generated from Trading.Football are displayed in a streaming FantasyTicker that users can follow to receive the most accurate, market-driven intel in the fantasy football industry.</p>

			<p>Whether actively involved as a Trader or simply looking for the most up-to-date stats and values for football players, follow Trading.Football’s FantasyTicker at <a href='https://trading.football/'>https://trading.football</a> and receive automated tweets on market moves of players by following @TF_Ticker and @SatoshiFantasy.</p>

			<p>Trading.Football is the flagship fantasy football product from Satoshi Fantasy, LLC, a leading technology company and pioneer in distributed fantasy football.  Satoshi Fantasy is the first company to introduce blockchain technology to fantasy sports, utilizing proven protocol to fuel the decentralized predictive market.</p>

			<h3>About the Team</h3>

			<h4>Jay Berg, Founder & CEO</h4>
			<p>Jay Berg founded Satoshi Fantasy in 2013 based on a cross section of four key passions: fantasy football, coding, high-frequency trading and cryptocurrency. Jay serves as CEO of Satoshi Fantasy and oversees development for Trading.Football, the world’s first blockchain-based prediction market for fantasy football results.</p>
			<p>Jay has spent the last 15+ years developing, designing and delivering complex software solutions with a focus on electronic exchanges, high-frequency trading, alpha-modeling, bitcoin exchanges and proprietary trading groups. Prior to founding Satoshi Fantasy, Jay was a lead programmer for Bloomberg LP in New York City, coding trading screens for the Bloomberg Terminal. Jay has also served as an advisor for Bitcoin start-ups, having most recently worked on the Bitcoin Matching Engine. Jay holds a Masters of Financial Engineering from Baruch College of the City University of New York.</p>

			<h4>Ryan Ragle, Core Developer</h4>
			<p>Ryan Ragle serves as Core Developer for Satoshi Fantasy, leading development for Trading.Football. Prior to joining Satoshi Fantasy, Ryan held software development roles at Chevron, Paramount Farms and FunVaultGames. Ryan graduated from UC Berkeley with a degree in Computer Science.</p>

			<h4>Sam Trenchi, Head of Sales</h4>
			<p>Sam Trenchi is Head of Sales for Satoshi Fantasy, leading growth and user acquisition for the Trading.Football platform. Sam specializes in creating and executing engagement programs for the Trader community on Trading.Football and growing the influencer network of fantasy football experts on the Trading.Football platform. Sam is a fourth-generation attorney, the third generation to practice in Tennessee. Sam holds a JD from the University of Arkansas and a BA in Philosophy from Belmont University. Originally from Hot Springs, Arkansas, Sam is a huge Razorbacks fan.</p>
		  
        </div>
      </div>
    );
  }

}

export default AboutPage;
