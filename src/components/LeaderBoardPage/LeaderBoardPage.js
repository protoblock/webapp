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

  getFilterText(){
    let filterText = [];
	if (this.state.sortWeek == 'all weeks' &&
	  this.state.sortPosition == 'all positions'){
      return filterText;
    }
	filterText.push(<h3>Showing results for:</h3>)
    if (this.state.sortWeek != 'all weeks'){
	  filterText.push(
	    <h3>Week {this.state.sortWeek}</h3>
	  );
    }
    if (this.state.sortPosition != 'all positions'){
	  filterText.push(
	    <h3>Position: {this.state.sortPosition}</h3>
	  );
    }
	return filterText;
  }

  getHeadingText(){
    return (
      <div>
	    <h2>{`${this.state.season} | Week ${this.state.currentWeek}`}</h2>
        <h1>Leaderboard</h1>
        {this.getFilterText()}
      </div>
    );
  }

  getQuery(){
    let query = '?';
    if (this.state.sortWeek != 'all weeks'){
      query += 'week=' + this.state.sortWeek + '&';
    }
    if (this.state.sortPosition != 'all positions'){
      query += 'position=' + this.state.sortPosition;
    }
    return query;
  }

  getTeamRows() {
    if (this.state.leaders.length > 0){
      return this.state.leaders.map((fantasyName, index) => {
        let query = this.getQuery();
        let destination = '/fantasy/players/' + fantasyName.name + '/awards' + query;
        return (
          <tr>
            <td>{++index}</td>
            <td style={{width: 75 + '%'}}><a href={encodeURI(destination)} onclick={Link.handleClick}>{fantasyName.name}</a></td>
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
          <LeaderBoardFilterContainer currentWeek={this.state.currentWeek} sortWeek={this.state.sortWeek} 
		    sortPosition={this.state.sortPosition}/>
            {table}
        </div>
      </div>
    );
  }

}

export default LeaderBoardPage;
