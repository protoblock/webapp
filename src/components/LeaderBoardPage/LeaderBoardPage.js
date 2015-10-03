import React, { PropTypes } from 'react';
import styles from './LeaderBoardPage.less';
import withStyles from '../../decorators/withStyles';
import LeaderBoardFilterContainer from '../LeaderBoardFilterContainer';
import LeaderBoardStore from '../../stores/LeaderBoardStore';
import LeaderBoardActions from '../../actions/LeaderBoardActions';
import Spinner from '../Spinner';
import {Table} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';
import Link from '../../utils/Link';
import PageHeading from '../PageHeading';
import Config from '../../utils/Config';

@withStyles(styles)
class LeaderBoardPage extends React.Component{

  static propTypes = {
    query: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = LeaderBoardStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    LeaderBoardStore.listen(this.onChange);
    if (window) {
      let socket = io.connect(Config.apiURL, {secure: true});
      socket.on('change', function() {
        console.log('changing');
        LeaderBoardActions.getLeaders(window.location.search);
        LeaderBoardActions.getCurrentWeek();
        LeaderBoardActions.getSeason();
      });
    }
    LeaderBoardActions.getLeaders(this.props.query);
    LeaderBoardActions.getCurrentWeek();
    LeaderBoardActions.getSeason();
  }

  componentWillUnmount() {
    LeaderBoardStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getHeadingText(){
    return (
      <div>
        <h1>Leaderboard</h1>
        <h2>{`${this.state.season} | Week ${this.state.week}`}</h2>
      </div>
    );
  }

  getTeamRows() {
    if (this.state.leaders.length > 0){
      return this.state.leaders.map((fantasyName, index) => {
        let destination = '/fantasy/players/' + fantasyName.name + '/awards';
        return (
          <tr>
            <td>{++index}</td>
            <td><a href={encodeURI(destination)} onclick={Link.handleClick}>{fantasyName.name}</a></td>
            <td>{fantasyName.score || 0}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan='2'>
            {/*Error loading leaders: {this.state.errorMessage}*/}
            Coming Soon!
          </td>
        </tr>
      );
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
          <PageHeading text={this.getHeadingText()} logoSize='lg' />
          <LeaderBoardFilterContainer currentWeek={this.state.currentWeek} sortWeek={this.state.sortWeek} />
            {table}
        </div>
      </div>
    );
  }

}

export default LeaderBoardPage;
