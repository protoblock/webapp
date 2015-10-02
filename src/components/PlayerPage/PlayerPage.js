import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import style from './PlayerPage.less';
import PlayerStore from '../../stores/PlayerStore';
import PlayerActions from '../../actions/PlayerActions';
import PlayerFilterContainer from '../PlayerFilterContainer';
import Spinner from '../Spinner';
import {Table} from 'react-bootstrap';
import Config from '../../utils/config';

@withStyles(style)
class PlayerPage extends React.Component{
  static propTypes = {
    path: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = PlayerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PlayerStore.listen(this.onChange);
    PlayerActions.getPlayer(this.props.path);
    if (window) {
      let socket = io.connect(Config.apiURL, {secure: true});
      socket.on('change', function() {
        console.log('changing');
        this.getPlayer(this.props.path);
      });
    }
  }

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getRows() {
    if (this.state.projections.length > 0 && typeof this.state.projections[0].FANTASYNAME !== 'undefined'){
      return this.state.projections.map((projection) => {
        return (
          <tr>
            <td>{projection.FANTASYNAME}</td>
            <td>{projection.WEEK}</td>
            <td>{projection.PROJECTION || 0}</td>
            <td>{projection.RESULT || 0}</td>
            <td>{projection.AWARD || 0}</td>
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
    if (!this.state.projections.length && !this.state.errorMessage){
      return (
        <Spinner />
      );
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>FantasyName</th>
              <th>Week</th>
              <th>Projection</th>
              <th>Result</th>
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
      <div className='PlayerPage'>
        <div className='PlayerPage-container'>
          <h1>Leader Board</h1>
          <PlayerFilterContainer name={this.state.name} points={this.state.points} team={this.state.team} position={this.state.position}/>
          {table}
        </div>
      </div>
    );
  }

}

export default PlayerPage;
