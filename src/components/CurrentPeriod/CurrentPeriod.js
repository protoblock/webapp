import 'react-bootstrap';
import React, { PropTypes } from 'react';
import styles from './CurrentPeriod.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CurrentPeriod{

  static propTypes = {
    season: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired
  };

  render(){
    return (
      <div className='CurrentPeriod'>
        <div className='center'>
          <span>Season: {this.props.season}</span>
          <span>PreGame: {this.props.game}</span>
        </div>
      </div>
    );
  }
}
export default CurrentPeriod;
