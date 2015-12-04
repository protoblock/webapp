/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayerPage.scss';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
var LineChart = require('react-chartjs').Line;

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


@withStyles(styles)
class PlayerPage extends Component {
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
      'price': 'n/a',
      'week': 'n/a'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    let playerId = getParameterByName('playerId');

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

      let chartData = {
          labels: ["12/15", "", "", "12/16", "", "", "12/17"],
          datasets: [
              {
                  label: "My First dataset",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [9, 9, 8, 9, 10, 9, 10]
              }
          ]
      };

      this.setState({
        'chartData': chartData
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
      <div className="PlayerPage">
        <div className="PlayerPage-container">
          <div className='left-container'>
            <h1>Bio</h1>
            <div>Name: {this.state.playerName}</div>
            <div>Team: {this.state.team}</div>
            <div>Position: {this.state.position}</div>
          </div>
          <div className='right-container'>
            <h1>Fantasy Ticker Price</h1>
            <div>
              <p>Price: {this.state.price}</p>
              <p>Week: {this.state.week}</p>
            </div>
            <LineChart data={this.state.chartData} options={chartOptions} redraw />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerPage;
