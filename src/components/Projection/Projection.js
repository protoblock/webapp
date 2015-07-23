/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Projection.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import {OverlayTrigger, Popover} from 'react-bootstrap';

@withStyles(styles)
class Projection {

  static propTypes = {
    player: PropTypes.shape({
      week: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired,
      result: PropTypes.string.isRequired,
      projection: PropTypes.string.isRequired,
      award: PropTypes.number.isRequired
    })
  };

  render() {
    let popover = (
      <Popover className='Projection-Popover'>
        <span>Result: {this.props.player.result}</span><br/>
        <span>Projection: {this.props.player.projection}</span><br/>
        <span>Award: {this.props.player.award}</span>
      </Popover>
    );
    return (
      <div className="Projection">
        <div className="Projection-container">
          <OverlayTrigger placement='top' overlay={popover}>
            <span title="Test title">{this.props.player.player}: {this.props.player.projection}</span>
          </OverlayTrigger>
        </div>
      </div>
    );
  }

}

export default Projection;
