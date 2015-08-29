/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LeaderBoardPage.less';
import withStyles from '../../decorators/withStyles';
import LeaderBoardFilterContainer from '../LeaderBoardFilterContainer';
//import {leaders} from '../../../DummyData/fantasy-leaders-weekly.js';
import LeaderBoardStore from '../../stores/LeaderBoardStore';
import LeaderBoardActions from '../../actions/LeaderBoardActions';
import Spinner from '../Spinner';
import Logo from '../Logo';

import {Table, Grid, Col, Row} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';
import Link from '../../utils/Link';

@withStyles(styles)
class LeaderBoardPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = LeaderBoardStore.getState();
    this.onChange = this.onChange.bind(this);
    this.currentWeek = 3;
    this.currentSeason = '2015 Pre-Season';
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  componentDidMount() {
    LeaderBoardStore.listen(this.onChange);
    if (window) {
      let socket = io.connect("http://localhost:4545");
      socket.on('change', function() {
        console.log("changing");
        LeaderBoardActions.getLeaders(window.location.search);
      });
    }
    LeaderBoardActions.getLeaders(this.props.query);
  }

  componentWillUnmount() {
    LeaderBoardStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  getTeamRows() {
    if (this.state.leaders.length > 0){
      return this.state.leaders.map((fantasyName, index) => {
        let destination = "/fantasy/players/" + fantasyName.name + "/awards";
        return (
          <tr>
            <td>{++index}</td>
            <td><a href={destination} onclick={Link.handleClick}>{fantasyName.name}</a></td>
            <td>{fantasyName.score}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan="2">
            Error loading leaders: {this.state.errorMessage}
          </td>
        </tr>
      )
    }

  }

  buildTable() {
    let rows = this.getTeamRows();

    if (!this.state.leaders.length && !this.state.errorMessage){
      return (
        <Spinner />
      );
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Fantasy Name</th>
              <th>FantasyBits</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      );
    }
  }

  render() {
    let title = 'Trading Football';
    this.context.onSetTitle(title);
    let table = this.buildTable();

    return (
      <div className="LeaderBoardPage">
        <div className="LeaderBoardPage-container">
          <Grid>
            <Row>
              <Col xs={12} md={6} mdPush={6}>
                <Logo />
              </Col>
              <Col className="text-center" xs={12} md={6} mdPull={6}>
                <div className="LeaderBoardPage-container-heading">
                  <h1>leaderboard</h1>
                  <h2>{this.currentSeason} | Week {this.currentWeek}</h2>
                  {/*<LeaderBoardFilterContainer/>*/}
                </div>
              </Col>
            </Row>
          </Grid>
                    {table}
        </div>
      </div>
    );
  }

}

export default LeaderBoardPage;
