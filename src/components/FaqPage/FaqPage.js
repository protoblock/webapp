/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FaqPage.less';
import withStyles from '../../decorators/withStyles';

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
    return (
      <div className="FaqPage">
        <div className="FaqPage-container">
          <h1>FAQ</h1>

          <h5>Why play Trading Football?</h5>
          <p>You play Trading Football to showcase your fantasy football skills. Make projections on as many players as you can and earn FantasyBits to rise up the leaderboard.</p>

          <h5>What can I do with FantasyBits?</h5>
          <p>Coming soon, FantasyBits will be needed to buy/sell/trade individual NFL players in our own Fantasy Football league.</p>

          <h5>Can I access Trading Football from a public or shared computer?</h5>
          <p>No, your computer is unique to you and has its own login.</p>

          <h5>How many players can I make projections on each week?</h5>
          <p>You can project for every offensive player each game week.  You want to project on the Bills 3rd string RB? Go right ahead!</p>

          <h5>Do I have to make projections for every player?</h5>
          <p>No, you can project only on one player per week if you desire; however, this limits the amount of FantasyBits that you can earn.</p>

          <h5>Can I start midseason?</h5>
          <p>Yes, you can start midseason.</p>

          <h5>What information is needed to sign up?</h5>
          <p>All you need is a Windows or Apple computer to download our software and you are good to go!</p>

          <h5>Is this software safe?</h5>
          <p>Yes!</p>

          <h5>Can I have multiple accounts?</h5>
          <p>Your FantasyName is meant to uniquely represent your fantasy football skills.</p>

          <h5>What if I get a new computer?</h5>
          <p>Make sure to backup your FantasyNames secret file if you want to play Trading Football on another computer. You’ll be able to transfer your FantasyNames secret file to your new computer.</p>

          <h5>Can I see other users’ future/past projections?</h5>
          <p>All projections can be seen by all other users. If you can predict the best projectors, feel free to copy their projections.</p>

          <h5>Is there something like this for other sports?</h5>
          <p>Trading Football is completely unique to fantasy football but may expand to other sports soon.</p>

          <h5>Can I play Trading Football from a tablet/phone?</h5>
          <p>Currently, no; however, we are working on a light version that will work from any javascript enabled browser.</p>
        </div>
      </div>
    );
  }

}

export default FaqPage;
