import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import style from './FantasyNamePage.less';
import FantasyNameStore from '../../stores/FantasyNameStore';
import FantasyNameActions from '../../actions/FantasyNameActions';
import FantasyNameFilterContainer from '../FantasyNameFilterContainer';
import Spinner from '../Spinner';
import {Table} from 'react-bootstrap';
import Config from '../../utils/config';
import Link from '../../utils/Link';

@withStyles(style)
class FantasyNamePage extends React.Component{
  static propTypes = {
    path: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = FantasyNameStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  getQueryParams(query){
    let params = {};
	let paramsArray = query.split('?')[1].split('&');
	for (let i = 0; i < paramsArray.length; i++){
	  let param = paramsArray[i].split('=');
	  if (param[0] == 'week' || param[0] == 'position'){
		  params[param[0]] = param[1];
	  }
	}
	if (typeof params.week !== 'undefined'){
		FantasyNameActions.updateSortWeek(params.week);
	}
	if (typeof params.position !== 'undefined'){
		FantasyNameActions.updateSortPosition(params.position);
	}
  }

  componentDidMount() {
    FantasyNameStore.listen(this.onChange);
    FantasyNameActions.getCurrentWeek();
    FantasyNameActions.getPlayer(this.props.path, this.props.query);
	this.getQueryParams(this.props.query);
    if (window) {
      let socket = io.connect(Config.apiURL, {secure: true});
      socket.on('change', function() {
        console.log('changing');
        FantasyNameActions.getCurrentWeek();
        FantasyNameActions.getPlayer(this.props.path, this.props.query);
      });
    }
  }

  componentWillUnmount() {
    FantasyNameStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getRows() {
    if (this.state.players.length > 0 && typeof this.state.players[0].WEEK !== 'undefined'){
      return this.state.players.map((player) => {
        let destination = '/fantasy/nfl/' + player.PLAYERID + '/week/' + player.WEEK;
        return (
          <tr>
            <td>{player.WEEK}</td>
            <td>
              <a href={encodeURI(destination)} onclick={Link.handleClick}>
                {player.FIRSTNAME + ' ' + player.LASTNAME}
              </a>
            </td>
            <td>{player.TEAM}</td>
            <td>{player.RESULT || 0}</td>
            <td>{player.PROJECTION || 0}</td>
            <td>{player.AWARD || 0}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan='5'>
            {/*Error loading balance info: {this.state.errorMessage}*/}
            No results yet, check back later!
          </td>
        </tr>
      );
    }
  }

  buildTable() {
    let rows = this.getRows();
    if (!this.state.players.length && !this.state.errorMessage){
      return (
        <Spinner />
      );
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Name</th>
              <th>Team</th>
              <th>Result</th>
              <th>Projection</th>
              <th>Reward</th>
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
    let title = 'Paper Football';
    this.context.onSetTitle(title);
    let table = this.buildTable();

    return (
      <div className='FantasyNamePage'>
        <div className='FantasyNamePage-container'>
          <h1>Leader Board</h1>
          <FantasyNameFilterContainer name={this.state.name}
            balance={this.state.balance} path={this.props.path}
            currentWeek={this.state.currentWeek} sortWeek={this.state.sortWeek}
            position={this.state.sortPosition}/>
          {table}
        </div>
      </div>
    );
  }

}

export default FantasyNamePage;
