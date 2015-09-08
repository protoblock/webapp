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

          <h2>Trading Football Questions</h2>

          <h4>What is Trading Football?</h4>
          <p>Trading Football is a game made for fantasy football players by fantasy football players.  Users are able to make projections for every offensive player (QB, RB, WR, TE, and kickers); you can submit as many or as few projections as you want. After every week in the regular season, Fantasy Bits are distributed to all players based on the accuracy of their projections. Those with the most Fantasy Bits, because they had the most accurate projections, are proudly recognized on the Fantasy Bits Leaderboard.</p>

          <h4>What makes Trading Football different than other sites?</h4>
          <p>Much like other websites, Trading Football will aggregate projections from fantasy football players. Unlike other websites, Trading Football will aggregate this data from the masses instead of just a select few. By doing this, Trading Football will:</p>
          <ul>
            <li>A) Determine who the most skilled fantasy players are</li>
            <li>B) Provide a full range of weekly offensive player projections</li>
            <li>C) Award Fantasy Bits based on projection accuracy</li>
          </ul>

          
          <h4>Why are fantasy football players using Trading Football?</h4>
          <p>Trading Football will give hard core fantasy players a significant edge in lineup decisions and daily player values, by monitoring the real time price of their fantasy players on tickers and moving values charts.</p>
          <p>In our future release, Trading Football players will be able to buy, sell, and hedge their weekly fantasy projections. Fantasy Bits will be tradable - thereby providing Fantasy Bits holders an opportunity to monetize the rewards from their accurate projections.</p>

          <h4>What is the Trading Football Leaderboard?</h4>
          <p>The Trading Football Leaderboard will be the go to ranking system for the world’s fantasy football players: Here’s your chance to be on it. The more Fantasy Bits you collect, the higher you climb on the Leaderboard. Being a highly ranked player on the Leaderboard is a testament to your fantasy football skills. Want to know who the best projector has been for the last three weeks? Or who is the best at projecting quarterbacks? The Leaderboard can be sorted based on time period, offensive position, team, and even player.</p>

          <h2>Fantasy Bits Questions</h2>

          <h4>What are Fantasy Bits?</h4>
          <p>Fantasy Bits are a cryptographically-secured token that are unforge-able and owned by your Fantasy Name. Fantasy Bits are created by the Trading Football program provable NFL statistics and are distributed by provable projections tied to your Fantasy Name.</p>

          <h4>Why do I want Fantasy Bits?</h4>
          <p>Soon you will be able to use your Fantasy Bits in our game’s Level 2 to speculate on NFL players’ weekly and season fantasy point totals. You’ll be able to earn Fantasy Bits if you buy when a player is undervalued and sell when a player is overvalued. With Trading.Football, there will be no offseason; you’ll always be able to use your fantasy skills to earn Fantasy Bits and trade them for value.</p> 

          <h2>Gameplay Questions</h2>

          <h4>Can I play Trading Football with my Fantasy Name from a public or shared computer?</h4>
          <p>Yes, as long as you memorize your mnemonic.</p>

          <h4>How many players can I make projections on each week?</h4>
          <p>You can project for every offensive player, kicker, and defense/special teams each week.  You want to project on the Bills 3rd string RB? Go right ahead!</p>

          <h4>Do I have to make projections for every player?</h4> 
          <p>No, you can project only on one player per week if you desire; however, this limits the amount of Fantasy Bits that you can earn.</p>

          <h4>What information is needed to sign up?</h4>
          <p>No information is needed at all to start playing Trading Football. All you need is a Windows computer to run Trading Football on and you are good to go!</p>

          <h4>Can I have multiple accounts?</h4> 
          <p>Yes, you can have multiple Fantasy Names.</p>

           
          <h4>If there is only one computer in the household, but two (or three) family members want to use the software, will they be able to “login” separately into the software with their own username?</h4> 
          <p>Yes</p>

          <h4>Can I see other users’ projections?</h4> 
          <p>All projections can be seen by all other users. If you can predict the best projectors, feel free to copy their projections.</p>

          <h4>Can I play Trading Football from a tablet/phone?</h4>  
          <p>Currently, no; however, we are working on a light version that will work from any javascript enabled browser.</p>

          <h4>Is there Trading Baseball or Trading Basketball?</h4> 
          <p>Trading Football is completely unique to fantasy football but may expand to other sports soon.</p>

          <h2>Fantasy Name Questions</h2>

          <h4>Can I play Trading Football with my Fantasy Name from a public or shared computer?</h4> 
          <p>Yes,  as long as you memorize your mnemonic.</p>

          <h4>What happens to my account if I get a new computer?</h4> 
          <p>Make sure to backup your Fantasy Names secret file if you want to play Trading Football on another computer. You’ll be able to transfer your Fantasy Names secret file to your new computer or generate your Fantasy names secret file from your backup seed.</p>

          <h4>What can I do to recover my FantasyName should my hard drive fail?</h4> 
          <p>We have implemented BIP39, which can function as a “brain wallet”.. you just need to remember 12 word mnemonic to reconstruct your FantasyName private_key.</p>

          <h4>How do I use the 12 word mnemonic to recover my FantasyName?</h4> 
          <p>Simply click the import button and type in your 12 word mnemonic.</p>

          <h2>Protocol Questions</h2>

          <h4>What is the difference between Bitcoin and Fantasy Bits?</h4>
          <p>Although Fantasy Bits uses some of the concepts created by Satoshi Nakamoto, the founder of Bitcoin, Fantasy Bits are significantly different than bitcoins. Unlike Bitcoin, which is currently worth $230, Fantasy Bits are not tradable for dollars. The Trading Football protocol only uses FantasyBits.</p>

          <h4>Does the current version of Trading Football connect to a network of game players or to a server?</h4> 
          <p>As we are currently in our MVP stage, the Trading Football blockchain currently syncs blocks from a static API.</p>

          <h4>How is the blockchain used in Trading Football?</h4>
          <p>We use a blockchain as a way to secure all projections. It is also a protocol that allows each individual player to verify and score their own and everyone else’s projections.</p>

          <h4>Do you have demos (tutorials) of how to navigate and use the software on your website?</h4> 
          <p>Yes we do! Check right here for our tutorial.</p>
        </div>
      </div>
    );
  }

}

export default FaqPage;
