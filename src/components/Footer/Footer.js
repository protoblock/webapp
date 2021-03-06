/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
//import ProjectionTicker from '../ProjectionTicker';
//import Link from '../../utils/Link';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div className="Footer">
        <div className="Footer-container">
        {/*<ProjectionTicker />*/}

          <span className="Footer-text">© Satoshi Fantasy, LLC</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="mailto:info@satoshifantasy.com" target="_blank" >info@satoshifantasy.com</a>
        {/*    <span className="Footer-spacer">·</span>
        <a className="Footer-link" href="/privacy" onClick={Link.handleClick}>Privacy</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/not-found" onClick={Link.handleClick}>Not Found</a>
          <span className="Footer-spacer"> | </span>
          <span ref="viewport" className="Footer-viewport Footer-text Footer-text--muted">Viewport:</span>
        */}
        </div>
      </div>
    );
  }

}

export default Footer;
