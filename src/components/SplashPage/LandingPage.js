
import React, { PropTypes } from 'react';
import styles from './LandingPage.less';
import withStyles from '../../decorators/withStyles';

import LandingFilterContainer from '../LandingFilterContainer';

import LandingStore from '../../stores/LandingStore';
import LandingActions from '../../actions/LandingActions';
import Spinner from '../Spinner';
import {Table} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';
import Link from '../../utils/Link';
import PageHeading from '../PageHeading';

@withStyles(styles)
class LandingPage extends React.Component{

  static propTypes = {
    query: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = LandingStore.getState();
    this.onChange = this.onChange.bind(this);
    this.currentWeek = 3;
    this.currentSeason = 'Pre-Season';
  }

  componentDidMount() {
    LandingStore.listen(this.onChange);
    if (window) {
      let socket = io.connect('https://api.trading.football:4545', {secure: true});
      //let socket = io.connect('https://localhost:4545', {secure: true});
      socket.on('change', function() {
        console.log('changing');
        LandingActions.getLeaders(window.location.search);
      });
    }
    LandingActions.getLeaders(this.props.query);
  }

  componentWillUnmount() {
    LandingStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getHeadingText(){
    return (
      <div>
        <h1>Landing</h1>
        <h2>{`${this.currentSeason} | Week ${this.currentWeek}`}</h2>
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

      <div className="LandingPage">
        <div className="LandingPage-container">
          <PageHeading text={this.getHeadingText()} logoSize='lg' />
            {table}
        </div>
      </div>
    );
  }

}

export default LandingPage;
