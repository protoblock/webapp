/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {PropTypes}from 'react';
import styles from './Logo.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Logo extends React.Component{

  static propTypes = {
    size: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  static defaultProps = {
      size: "lg"
  };


  getLogoClassName(){
    return `Logo-container-${this.props.size}`;
  }

  render() {
    return (
      <div className='Logo'>
        <div className='Logo-container'>
          <div className={this.getLogoClassName()} />
          </div>
      </div>
    );
  }

}

export default Logo;
