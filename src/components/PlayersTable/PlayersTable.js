/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayersTable.less';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

Array.prototype.unique = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};

@withStyles(styles)
class PlayersTable extends Component {
  constructor(props) {
    super(props);
	
	this.state = {
		'players': [],
		'sortBy': 'Price',
		'team': 'ALL',
		'position': 'ALL'
		
	};
	
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  
  componentDidUpdate(prevProps, prevState) {
	  if (prevProps.players !== this.props.players) {
		  this.setState({
			'players': this.props.players.slice(0)
		  });
	  }
  }

  handleClick(playerId) {
    this.props.changePlayer(playerId);
  }

  getRows() {
    let data = this.state.players.map((datum) => {
      let trClass = '';

      if (datum.change > 0) {
        trClass = 'tableRowUp';
      }
      else if (datum.change < 0) {
        trClass = 'tableRowDown';
      }
      else {
        trClass = 'tableRow';
      }

      return (
        <tr className={trClass}>
          <td className='tableCell'><span className='link' onClick={this.handleClick.bind(this, datum.playerId)}>{datum.playerName + ' (' + datum.team + ', ' + datum.pos + ')'}</span></td>
          <td className='tableCell'>{datum.price}</td>
          <td className='tableCell'>{datum.volume}</td>
          <td className='tableCell'>{datum.change}</td>
        </tr>
      );
    });

    return data;
  }

  buildTable() {
    let rows = this.getRows();

    return (
      <table className='playerTable'>
        <thead>
          <tr className='tableHeading'>
            <th className='tableCell'>Player Name</th>
            <th className='tableCell'>Price</th>
            <th className='tableCell'>Volume</th>
            <th className='tableCell'>Change</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
  
  getSortOptions() {
	let options = ['Price', 'Volume', 'Change'];
	let rows = [];
	
	for (let i = 0; i < options.length; ++i) {
		rows.push(
          <MenuItem eventKey={options[i]} onSelect={this.updateSort.bind(this)}>{options[i]}</MenuItem>
		);
	}
	
	return rows;
  }
  
  updateSort(eventKey) {
	let players = this.state.players;
	  
	switch (eventKey) {
		case 'Price':
			players.sort((a, b) => {
				return b.price - a.price;
			});
			
			break;
		case 'Volume':
			players.sort((a, b) => {
				return b.volume - a.volume;
			});
			
			break;
		case 'Change':
			players.sort((a, b) => {
				return b.change - a.change;
			});
			
			break;
		default:
			alert('Invalid Sort Option');
	}
	
	this.setState({
		'players': players,
		'sortBy': eventKey
	});
  }
  
  getTeams() {
	let teams = this.props.players.map((datum) => {
		return datum.team;
	}).unique().sort();
	
	let rows = [];
	
	rows.push(<MenuItem eventKey='ALL' onSelect={this.updateTeam.bind(this)}>ALL TEAMS</MenuItem>);
	
	for (let i = 0; i < teams.length; ++i) {
		rows.push(
          <MenuItem eventKey={teams[i]} onSelect={this.updateTeam.bind(this)}>{teams[i]}</MenuItem>
		);
	}
	
	return rows;
  }
  
  updateTeam(eventKey) {
	let players = this.props.players.slice(0);
	  
	if (eventKey !== 'ALL') {
		players = players.filter((datum) => {
			return datum.team === eventKey;
		});
	}
	
	//updateSort(this.state.sortBy);
	
	console.log('updateTeam - players:' + JSON.stringify(players));
	
	this.setState({
		'players': players,
		'team': eventKey
	});
  }
  
  
  render() {
    let tbl = this.buildTable();

    return (
      <div className="PlayersTable">
        <div className="PlayersTable-container">
          <h1 className='heading'>Players</h1>
          
		  <ButtonGroup>
		    <DropdownButton title='Team'>
			  {this.getTeams()}
		    </DropdownButton>
		    <DropdownButton title='Position'>
		    </DropdownButton>
		    <DropdownButton title='Sort By'>
			  {this.getSortOptions()}
		    </DropdownButton>
		  </ButtonGroup>
		  
		  <br />
		  <br />
		  
		  {tbl} 
        </div>
      </div>
    );
  }
}

export default PlayersTable;
