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

  componentDidMount() {
    FantasyNameStore.listen(this.onChange);
    FantasyNameActions.getPlayer(this.props.path);
    if (window) {
      let socket = io.connect(Config.apiURL, {secure: true});
      socket.on('change', function() {
        console.log('changing');
        this.getPlayer(this.props.path);
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
        let destination = '/fantasy/NFL/' + player.PLAYERID;
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
          <FantasyNameFilterContainer name={this.state.name} balance={this.state.balance}/>
          {table}
        </div>
      </div>
    );
  }

}

export default FantasyNamePage;
