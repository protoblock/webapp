/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayerDetail.scss';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
var LineChart = require('react-chartjs').Line;

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
      'playerName':'n/a',
      'team':'n/a',
      'position':'n/a',
      'chartData': chartData,
      'week': 'n/a'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playerId !== prevProps.playerId) {
      let playerId = this.props.playerId;

      agent.get('https://stagingapp.trading.football:4545/week')
      .set('Accept', 'application/json')
      .end((err, res) => {
        let week = res.body.week;

        this.setState({
          'week': week
        });

        let getPlayerDataURL = 'https://stagingapp.trading.football:4545/fantasy/nfl/' + playerId + '/week/' + week;

        agent.get(getPlayerDataURL)
        .set('Accept', 'application/json')
        .end((err, res) => {
          let name = res.body.data[0].FIRST + ' ' + res.body.data[0].LAST;
          let team = res.body.data[0].TEAM;
          let pos = res.body.data[0].POS;

          this.setState({
            'playerName': name,
            'team': team,
            'position': pos
          });
        });

        this.getChartData();
      });

    }
  }

  getChartData() {
    let url = 'https://stagingapp.trading.football:4545/ticks/' + this.props.playerId + '/week/' + this.state.week;

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
              //'label': 'player data',
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

    return (
      <div className="PlayerDetail">
        <div className="PlayerDetail-container">

          <h1>
            {this.state.playerName} Expected Results<br />
            Week {this.state.week}
          </h1>


          <div>Team: {this.state.team}</div>
          <div>Position: {this.state.position}</div>
          <br />

          <LineChart data={this.state.chartData} options={chartOptions} redraw />
          <br />
          <br />
          <button type="button" onClick={this.getChartData.bind(this)}>Refresh Chart</button>

        </div>
      </div>
    );
  }
}

export default PlayerDetail;
