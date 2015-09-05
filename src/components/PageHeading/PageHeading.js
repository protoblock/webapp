
import React, { PropTypes } from 'react';
import styles from './PageHeading.less';
import withStyles from '../../decorators/withStyles';
import Logo from '../Logo';
import {Table, Grid, Col, Row} from 'react-bootstrap';

@withStyles(styles)
class PageHeading extends React.Component{
  static propTypes = {
    text: PropTypes.object.isRequired,
    logoSize: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
  }

  static defaultProps = {
      text: (
        <div>
          <h1>Default Text</h1>
          <h2>Defualt Subtext</h2>
        </div>
      ),
      logoSize: 'lg'
    };


  render() {
    return (
      <div className="PageHeading">
        <div className="PageHeading-container">
          <Grid>
            <Row>
              <Col xs={12} md={6} mdPush={6}>
                <Logo size={this.props.logoSize} />
              </Col>
              <Col className="text-center" xs={12} md={6} mdPull={6}>
                <div className="PageHeading-container-heading">
                  {this.props.text}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }

}

export default PageHeading;
