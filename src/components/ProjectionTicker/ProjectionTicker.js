/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ProjectionTicker.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import Projection from '../Projection';
//import {players} from '../../../DummyData/players-score.js';


@withStyles(styles)
class ProjectionTicker {

  static propTypes = {
  };

  getProjections(){
    // stub for API call
    let ret = [];
  }

  render() {
    let data = players,
        ret = [];
    //data.forEach((p) => {
    //  ret.push(<Projection player={p}/>)
    //});

    return (
      <div className="ProjectionTicker">
        <div className="ProjectionTicker-container">
          {ret}
        </div>
      </div>
    );
  }

}

export default ProjectionTicker;
