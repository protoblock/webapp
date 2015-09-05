/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './RulesPage.less';
import withStyles from '../../decorators/withStyles';
import {Table} from 'react-bootstrap';
import PageHeading from '../PageHeading';

@withStyles(styles)
class RulesPage extends React.Component{

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
    let title = 'Rules';
    this.context.onSetTitle(title);
    let text = (
      <div>
        <h1>Rules</h1>
        <h2>How to Play The Game</h2>
      </div>
    );
    return (
      <div className="RulesPage">
        <div className="RulesPage-container">
          <PageHeading text={text} logoSize='sm' />
          <p>Make weekly offensive player projections in order to earn FantasyBits. The ability to make player projections will be locked at the time of their respective teams’ kickoff time.</p>

          <h5>How FantasyBits Are Created:</h5>
          <p>FantasyBits (FBs) are generated for each real fantasy point earned by an NFL player during the season. These points are generated using Trading Football’s PPR scoring system, based on statistics provided by <a href='http://www.fantasydata.com' target='_blank'>fantasydata.com</a></p>

          <h5>Scoring System (PPR Format):</h5>
          <Table>
            <tbody>
              <tr>
                <td>Passing Yards</td>
                <td>.05 points per yard</td>
              </tr>
              <tr>
                <td>Passing TD</td>
                <td>4 points</td>
              </tr>
              <tr>
                <td>Pass Interception</td>
                <td>-1 point</td>
              </tr>

              <tr className="RulesPage-separator">
                <td>Rushing Yards</td>
                <td>.1 point per yard</td>
              </tr>
              <tr>
                <td>Rushing TD</td>
                <td>6 points</td>
              </tr>

              <tr>
                <td>Receiving Yards</td>
                <td>.1 point per yard</td>
              </tr>
              <tr>
                <td>Receiving TD</td>
                <td>6 points</td>
              </tr>
              <tr>
                <td>Reception</td>
                <td>1 point per reception</td>
              </tr>

              <tr>
                <td>2-point Conversion</td>
                <td>2 points for passer, rusher, receiver</td>
              </tr>

              <tr>
                <td>PAT Kick</td>
                <td>1 point</td>
              </tr>
              <tr>
                <td>Field Goal</td>
                <td>3 points for 1-30 yards, .1 point for each additional yard</td>
              </tr>

              <tr>
                <td>Sack</td>
                <td>1 point</td>
              </tr>
              <tr>
                <td>Takeaway</td>
                <td>2 points</td>
              </tr>
              <tr>
                <td>Defensive TD</td>
                <td>6 points</td>
              </tr>
              <tr>
                <td>Safety</td>
                <td>5 points</td>
              </tr>
              <tr>
                <td>Shutout</td>
                <td>12 points</td>
              </tr>
              <tr>
                <td>1-6 Points Allowed</td>
                <td>10 points</td>
              </tr>
              <tr>
                <td>7-10 Points Allowed</td>
                <td>8 points</td>
              </tr>
            </tbody>
          </Table>

          <h5>Example:</h5>
          <p>Users make projections for Peyton Manning's week 1 game</p>
          <Table>
            <tbody>
              <tr>
                <th>User</th>
                <th>Projection</th>
              </tr>
              <tr>
                <td>Jay</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Alex</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Tim</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Mike</td>
                <td>20</td>
              </tr>
            </tbody>
          </Table>

          <p>Manning scores 52 points in his game.  Trading Football's algorithm distributes points according to the accuracy of users' projections</p>
          <Table>
            <tbody>
              <tr>
                <th>User</th>
                <th>Fantasy Bits</th>
              </tr>
              <tr>
                <td>Jay</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Alex</td>
                <td>27.238</td>
              </tr>
              <tr>
                <td>Tim</td>
                <td>24.76</td>
              </tr>
              <tr>
                <td>Mike</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>

          <p>If Manning scores 6 points in his game, points would be distributed much differently.</p>
          <Table>
            <tbody>
              <tr>
                <th>User</th>
                <th>Fantasy Bits</th>
              </tr>
              <tr>
                <td>Jay</td>
                <td>1.848</td>
              </tr>
              <tr>
                <td>Alex</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Tim</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Mike</td>
                <td>4.158</td>
              </tr>
            </tbody>
          </Table>

          <h5>How FantasyBits Are Distributed:</h5>
          <p>Trading Football’s algorithm will distribute FBs to users in different quantities based on the accuracy of their projections. The more accurate your projections are, the more FBs you get. <strong>Remember:</strong> The number of FantasyBits created is mathematically determined by the exact number of fantasy points scored by NFL players each week.</p>

          <h5>The Leaderboard:</h5>
          <p>The Trading Football Leaderboard will be the go to ranking system for the world’s fantasy football players: Here’s your chance to be on it. The more FantasyBits you collect, the higher you climb on the leaderboard. Being a highly ranked player on the leaderboard is a testament to your fantasy football skills. Want to know who the best projector has been for the last three weeks? Or who is the best at projecting quarterbacks? The leaderboard can be sorted based on time period, offensive position, team, and even player.</p>

          <h5>Purpose:</h5>
          <p>Much like other websites, Trading Football will aggregate projections from fantasy football players. Unlike other websites, Trading Football will aggregate this data from the masses instead of just a select few. By doing this, Trading Football will:
A) Determine who the most skilled fantasy players are
B) Provide a full range of weekly offensive player projections
C) Award FantasyBits based on projection accuracy</p>


        </div>
      </div>
    );
  }

}

export default RulesPage;
