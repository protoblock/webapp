/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayerDetail.less';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
var LineChart = require('react-chartjs').Line;
import Config from '../../utils/Config';

@withStyles(styles)
class PlayerDetail extends Component {
  constructor(props) {
    super(props);

    let chartData = {
        labels: [],
        datasets: [
            {
                data: [0]
            }
        ]
    };

    this.state = {
	  'playerId': 0,
      'playerName':'n/a',
      'team':'n/a',
      'position':'n/a',
      'chartData': chartData,
      'week': 'n/a',
      'l1snap': {
        'bidsize': 'n/a',
        'bid': 'n/a',
        'ask': 'n/a',
        'asksize': 'n/a',
        'last': 'n/a',
        'lastsize': 'n/a',
        'updownind': 'n/a',
        'lasttime': 'n/a',
        'lastupdate': 'n/a',
        'volume': 'n/a',
        'change': 'n/a'
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  
  componentDidMount() {
	this.getData();  
	setInterval(this.getData.bind(this), 60000);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.playerId !== prevProps.playerId) {
      let playerId = this.props.playerId;
	  
	  this.setState({
		  'playerId': playerId
	  },
	  () => {
	    this.getData();
	  });
	}
  }
  
  getData() {
	  let playerId = this.state.playerId;
	  
	  agent.get(Config.apiURL + '/week')
      .set('Accept', 'application/json')
      .end((err, res) => {
        let week = res.body.week;

        this.setState({
          'week': 15 //week
        });

        let getPlayerDataURL = Config.apiURL + '/player/' + playerId;

        agent.get(getPlayerDataURL)
        .set('Accept', 'application/json')
        .end((err, res) => {
          let name = res.body[0].FIRST + ' ' + res.body[0].LAST;
          let team = res.body[0].TEAM;
          let pos = res.body[0].POS;

          this.setState({
            'playerName': name,
            'team': team,
            'position': pos
          });
        });
      });

      agent.get(Config.apiURL + '/l1snap/' + playerId)
      .set('Accept', 'application/json')
      .end((err, res) => {
        let d = res.body[0];
		
		if (d.last !== this.state.l1snap.last) {
			this.getChartData();
		}

        this.setState({
          'l1snap': {
            'bidsize': d.bidsize,
            'bid': d.bid,
            'ask': d.ask,
            'asksize': d.asksize,
            'last': d.last,
            'lastsize': d.lastsize,
            'updownind': d.updownind,
            'lasttime': d.lasttime,
            'lastupdate': d.lastupdate,
            'volume': d.volume,
            'change': d.change
          }
        });
      });
    
  }

  getChartData() {
    let url = Config.apiURL + '/ticks/' + this.state.playerId + '/week/0'; // + this.state.week;

    agent.get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      let labels = [];
      let data = [];

      for (let i = 0; i < res.body.length; ++i) {
        let datum = res.body[i];
        let price = datum.price;
        let qty = datum.qty;
        let tictime = datum.tictime;

        let d = new Date(tictime);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

        labels.push(month + '/' + day + " " + time);
        data.push(price);
      }

      this.setState({
        'chartData': {
          'labels': labels,
          'datasets': [{
              'fillColor': "rgba(220,220,220,0.2)",
              'strokeColor': "rgba(220,220,220,1)",
              'pointColor': "rgba(220,220,220,1)",
              'pointStrokeColor': "#fff",
              'pointHighlightFill': "#fff",
              'pointHighlightStroke': "rgba(220,220,220,1)",
              'data': data

          }]
        }
      });


    });

  }

  render() {
    let chartOptions = {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve : true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot : true,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,

        //String - A legend template
        //legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    let indicator = '';

    if (parseInt(this.state.l1snap.updownind) === 1) {
      indicator = (<img className='upDownIndicator' src='/UpIndicator.png' />);
    }
    else if (parseInt(this.state.l1snap.updownind) === -1) {
      indicator = (<img className='upDownIndicator' src='/DownIndicator.png' />);
    }

    let moveFromOpenIndicator = this.state.l1snap.change > 0 ? '+' : '';

    return (
      <div className="PlayerDetail">
        <div className="PlayerDetail-container">

          <h1 className='title'>{this.state.playerName} {this.state.team} {this.state.position}</h1>
          <div className='subtitle'>Week {this.state.week} Expected Results: <span className='price'>{this.state.l1snap.last}</span></div>
          <br />
          
          <table className='stockTable'>
            <thead>
              <tr className='tableHeading'>
                <th className='tableCell'>Bid Size</th>
                <th className='tableCell'>Bid</th>
                <th className='tableCell'>Ask</th>
                <th className='tableCell'>Ask Size</th>
                <th className='tableCell'>Last</th>
                <th className='tableCell'>Last Size</th>
                <th className='tableCell'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='tableCell'>{this.state.l1snap.bidsize}</td>
                <td className='tableCell'>{this.state.l1snap.bid}</td>
                <td className='tableCell'>{this.state.l1snap.ask}</td>
                <td className='tableCell'>{this.state.l1snap.asksize}</td>
                <td className='tableCell'>{this.state.l1snap.last}</td>
                <td className='tableCell'>{this.state.l1snap.lastsize}</td>
                <td className='tableCell'>{indicator}</td>
              </tr>
            </tbody>
          </table>

          <br />


          <div>
            Volume: {this.state.l1snap.volume}<br />
            Move from open: {moveFromOpenIndicator}{this.state.l1snap.change}
          </div>

          <LineChart className='chart' data={this.state.chartData} options={chartOptions} redraw />
        </div>
      </div>
    );
  }
}

export default PlayerDetail;
