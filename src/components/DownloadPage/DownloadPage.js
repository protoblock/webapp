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
      {
        'name': 'Mac OS',
        'versions': [
          { number: '10.7' },
		  { number: '10.8' },
          { number: '10.9' },
          { number: '10.10' }
        ],
        'disk': '25mb',
        'link': 'http://trading.football:8080/tradingfootball.dmg',
        'fileName': 'Mac-Download',
		'instructions' : (
		  <div>
            <p>Note: 64-bit and administrative privileges required - Click ‘more’ and ‘run anyway’ on the Smartscreen Filter (for Windows 8+).</p>
            <p>Read the <a href='/rules' >rules</a> and watch the Trading Football tutorial for information on how to play:</p>
            <p><a href='https://www.youtube.com/watch?v=hNm4UGx9xGs' target='_blank'>Video Instructions</a></p>
            <p>Getting started with Trading Football is as easy as 1, 2, 3.</p>
            <h3>1. Copy tradingfootball to Applications folder and run.</h3>
            <h3>2. Claim your Fantasy Name</h3>
            <img src={require('./download-image2.png')} className='DownloadPage-image' alt='setup 2' />
            <h3>3. Start Making Projections</h3>
            <img src={require('./download-image3.png')} className='DownloadPage-image' alt='setup 3' />
          </div>
		)
      },
      {
        'name': 'Windows',
        'versions': [
          {number: '7', architecture: 'amd64'},
          {number: '8', architecture: 'amd64'},
          {number: '10', architecture: 'amd64'}
        ],
        'disk': '15 MB',
        'link': 'http://trading.football:8080/tradingfootball-setup.exe',
        'fileName': 'Windows-Download',
        'instructions' : (
          <div>
            <p>Notes: 64-bit and administrative privileges required - Click ‘more’ and ‘run anyway’ on the Smartscreen Filter (for Windows 8+).</p>
            <p>Read the <a href='/rules' >rules</a> and watch the Trading Football tutorial for information on how to play:</p>
            <p><a href='https://www.youtube.com/watch?v=hNm4UGx9xGs' target='_blank'>Video Instructions</a></p>
            <p>Getting started with Trading Football is as easy as 1, 2, 3.</p>
            <h3>1. Download and Install:</h3>
            <img src={require('./download-image1.png')} className='DownloadPage-image' alt='setup 1' />
            <h3>2. Claim your Fantasy Name</h3>
            <img src={require('./download-image2.png')} className='DownloadPage-image' alt='setup 2' />
            <h3>3. Start Making Projections</h3>
            <img src={require('./download-image3.png')} className='DownloadPage-image' alt='setup 3' />
          </div>
        )
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
        {supported.instructions}

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
                {req.instructions}
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
          <div>

		  

<h2>Become a Trader on Trading.Football</h2>

<p>Any fantasy football player can be a Trader on Trading.Football, but the most skilled Traders  represent the best-of-the-best in fantasy expertise. Traders are the foundation of the Trading.Football community and power what is the world’s first prediction market for fantasy football results. By playing Trading.Football, Traders are able to demonstrate their raw fantasy skills to the world.</p>

<h3>How To Play</h3>
<p>Traders play Trading.Football by making projections on NFL player’s fantasy results. Traders are able to make projections for every offensive player - QB, RB, WR, TE, K.  Based on the accuracy of their projections, Traders are rewarded tokens in the form of FantasyBits.</p>

<p>Traders then use FantasyBits to trade NFL players on Trading.Football’s gamified exchange, buying when a player is undervalued and selling when a player is overvalued in attempt to profit and earn more FantasyBits. The act of buying and selling with profit and loss creates an efficient market, which generates each NFL player’s price that reflects all relevant information. Player prices, stats and charts generated from Trading.Football’s Traders are displayed in a streaming FantasyTicker that users can follow to receive the most accurate, market-driven intel in the fantasy football industry.</p>

<p>FantasyBits are rare, with 100 FantasyBits minted for every fantasy point scored each week by NFL players. FantasyBits can only be earned with raw fantasy football skills, which is determined by Trading.Football’s groundbreaking “Proof-of-Skill” consensus algorithm. FantasyBits act solely as tokens on the Trading.Football platform and cannot be traded for real currency.</p>

<h3>How to Get Started</h3>
<p>Simply download the Trading.Football desktop program for Windows or Mac from the links below to get started and showcase your true fantasy skills to the world!</p>
		  
          </div>
		  
          {this.getOSContent()}
		  
		  <div>
		  
<h3>Support</h3>
<p>Email: <a href='mailto://info@satoshifantasy.com'>info@satoshifantasy.com</a></p>
<p>Hotline: 650-822-2777</p>

		  </div>
        </div>
      </div>
    );
  }

}

export default DownloadPage;
