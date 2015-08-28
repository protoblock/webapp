/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Logo.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Logo extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Logo">
        <div className="Logo-container">
        </div>
      </div>
    );
  }

}

export default Logo;
