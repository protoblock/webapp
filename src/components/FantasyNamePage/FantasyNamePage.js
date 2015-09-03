import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import style from './FantasyNamePage.less';
import FantasyNameStore from '../../stores/FantasyNameStore';
import FantasyNameActions from '../../actions/FantasyNameActions';
import FantasyNameFilterContainer from '../FantasyNameFilterContainer';
import Spinner from '../Spinner';
import {Table} from 'react-bootstrap';

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
      let socket = io.connect('https://api.trading.football:4545', {secure: true});
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
    if (this.state.players.length > 0){
      console.log(this.state.players);
      return this.state.players.map((player) => {
        console.log(player);
        return (
          <tr>
            <td>{player.WEEK}</td>
            <td>{player.FIRSTNAME + ' ' + player.LASTNAME}</td>
            <td>{player.RESULT}</td>
            <td>{player.PROJECTION}</td>
            <td>{player.AWARD}</td>
          </tr>
        );
      });

    } else {
      return (
        <tr>
          <td colSpan='5'>
            Error loading balance info: {this.state.errorMessage}
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
