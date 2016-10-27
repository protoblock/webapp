/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayerDetailPage.less';
import withStyles from '../../decorators/withStyles';
import PlayerDetail from '../PlayerDetail/PlayerDetail';

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

@withStyles(styles)
class PlayerDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'playerId': 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    let playerId = getParameterByName('playerId');

    this.setState({
      'playerId': playerId
    });
  }

  render() {
    return (
      <div className="PlayerDetailPage">
        <div className="PlayerDetailPage-container">
          <PlayerDetail playerId={this.state.playerId} />
        </div>
      </div>
    );
  }

}

export default PlayerDetailPage;
