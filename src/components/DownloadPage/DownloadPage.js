/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './DownloadPage.less';
import withStyles from '../../decorators/withStyles';
import UAParser from 'ua-parser-js';
import Link from '../../utils/Link';
import PageHeading from '../PageHeading';
@withStyles(styles)
class DownloadPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  getUserAgent(){
    let p = new UAParser();
    try {
      return p.getResult();
    } catch(e){
      return false;
    }
  }

  getOSContent(){
    let ua = this.getUserAgent() || {name: false};
    var requirements = [ // put in config file
    /*  {
        'name': 'Mac OS',
        'versions': [
          { number: '10.8' },
          { number: '10.9' },
          { number: '10.10' }
        ],
        'disk': '25mb',
        'link': 'https://cdn.trading.football/downloads/Trading-Football.dmg',
        'fileName': 'Trading-Football.dmg'
      },*/
      {
        'name': 'Windows',
        'versions': [
          {number: '7', architecture: 'amd64'},
          {number: '8', architecture: 'amd64'},
          {number: '10', architecture: 'amd64'}
        ],
        'disk': '25.1 MB',
        'link': 'https://www.dropbox.com/s/u36zrr8s2j8bxov/tradingfootball-beta-setup.exe?dl=1',
        'fileName': 'trading-football-beta-setup.exe'
      }
    ];
    let header = '', body = [];
    let supported = requirements
      .filter( (req) =>
        req.name === ua.os.name && //match OS name
        req.versions.some( (v) =>
          ua.os.version.indexOf(v.number) > -1 && // match versions
          !!ua.cpu.architecture ? // if architecture match architecture
            ua.cpu.architecture === v.architecture :
            true));
    if(supported.length){
      supported = supported[0];
      header = (<div>
        <h3>{supported.name + '   '}<a href={supported.link}>{supported.fileName}</a></h3>
        <p>Version: {ua.os.name + ' ' + ua.os.version} | Hard Disk: {supported.disk}</p>

        {supported.length > 1 ? <h5>Other Operating Systems:</h5> : ''}
      </div>);
    } else{
      header = (
        <div>
          <h3>This device is not supported</h3>
          <h5>Supported Operating Systems:</h5>
        </div>
      );
    }
    requirements
      .filter((req) => req !== supported)
      .forEach((req) => body.push(<div>
          <h4>{req.name + '  '}<a href={req.link}>{req.fileName}</a></h4>
          <p>Version: {req.name + ' ' + req.versions
            .reduce((a, c) => (a.number || a) +
              ', ' +
              c.number)
              .trim(', ') +
              ' x64' } | Hard Disk: {req.disk} </p>
        </div>
      ));

    return <div>{header}{body}</div>;
  }

  render() {
    let title = 'Download Trading Football';
    this.context.onSetTitle(title);
    let text = (
      <div>
        <h1>Download</h1>
        <h2>The Official App</h2>
      </div>
    );

    return (
      <div className="DownloadPage">
        <div className="DownloadPage-container">
          <PageHeading text={text} logoSize='sm' />
          {this.getOSContent()}
        </div>
      </div>
    );
  }

}

export default DownloadPage;
