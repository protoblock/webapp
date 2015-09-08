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
          <h4>Trading Football Rules</h4>
          <p>Trading Football is a game where users predict how many fantasy points each NFL player will score. The rules are simple!</p>

          <p>1. Each week, you can make projections on how many fantasy points any NFL player will score, up until their respective kickoff time.</p>

          <p>2. Trading Football scores fantasy points using a PPR scoring system and official NFL statistics. The Scoring System (PPR Format) is as follows:</p>

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

              <tr>
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
                <td>1 point per reception (ppr)</td>
              </tr>

               <tr>
                <td>Fumble Lost</td>
                <td>-2 points</td>
              </tr>
              <tr>
                <td>2-point Conversion</td>
                <td>2 points for passer, rusher, receiver</td>
              </tr>
              <tr>
                <td>PAT Offensive Safety</td>
                <td>2 points</td>
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
                <td>PAT Return</td>
                <td>2 points</td>
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

          <h4>Fantasy Bits Creation Rules</h4>
          <p>100 Fantasy Bits are created for every fantasy point scored in the NFL each week.</p>

          <h4>Fantasy Bits Distribution Rules</h4>

          <p>Fantasy Bits are awarded to Fantasy Names based on their weekly projection. The more accurate the projection, the more FBs awarded. </p>
          <p>Trading Football’s distribution algorithm follows these 3 simple rules:</p>

          <p>1. FBs get evenly distributed to all Fantasy Names that projected the exact number of fantasy points. </p>

          <p>2. For the rest of the Fantasy Names, the algorithm distributes all FBs based on a sliding scale. </p>

          <p>3. Projections that missed the mark by over 100% receive no awards. Leftover FBs will be awarded to to the “Fantasy Agent,” who provides the weekly data.</p>

          <p>Example:</p>
          <p>Four users (Jay, Alex, Tim, and Mike) make these projections for Peyton Manning’s week 1 game against the Baltimore Ravens.</p>

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

          <p>For simplicity’s sake, let’s say that Peyton Manning’s combined yards and touchdowns earned him 52 fantasy points in his game. After the match is over, Trading Football’s algorithm uses the second rule to automatically distributes FBs according to the accuracy of users’ projections.</p>

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

          <p>If Manning scores only 6 fantasy points in his game, the amount of FBs would be distributed much differently. Rule 3 of FB distribution dictates that the “Fantasy Agent” Fantasy Name would receive all of the FBs generated by Manning’s performance that week.</p>

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
                <td>0</td>
              </tr>
              <tr>
                <td>Tim</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Mike</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
          
          <p>Note: Trading Football is a consensus based blockchain system. Satoshi Fantasy LLC cannot change the rules by themselves. The rules are only subject to change by network consensus from the majority of users.</p>
        </div>
      </div>
    );
  }

}

export default RulesPage;
