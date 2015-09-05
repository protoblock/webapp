
import React, { PropTypes } from 'react';
import styles from './LandingPage.less';
import withStyles from '../../decorators/withStyles';

import {Grid, Row, Col, Table} from 'react-bootstrap';
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
  }


  getHeadingText(){
    return (
      <div>
        <h1>Landing</h1>
        <h2>FUCK</h2>
      </div>
    );
  }



  render() {
    let title = 'Trading Football';
    this.context.onSetTitle(title);

    return (

      <div className="LandingPage">
        <div className="LandingPage-container">
          <PageHeading text={this.getHeadingText()} logoSize='lg' />

        </div>
      </div>
    );
  }

}

export default LandingPage;
