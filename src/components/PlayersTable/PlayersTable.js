/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PlayersTable.less';
import withStyles from '../../decorators/withStyles';
import agent from 'superagent';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import Config from '../../utils/Config';

Array.prototype.unique = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

@withStyles(styles)
class PlayersTable extends Component {
  constructor(props) {
    super(props);
	
	this.state = {
		'players': []
	};
	
    this.onChange = this.onChange.bind(this);
  }
 
  componentDidUpdate(prevProps, prevState) {
	  if (!prevProps.players.equals(this.props.players)) {
		this.filter();
	  }
	  
	  if (prevProps.sortBy !== this.props.sortBy || 
			prevProps.team !== this.props.team || 
			prevProps.position !== this.props.position) {
		this.filter();
      }
  }

  onChange(state) {
    this.setState(state);
  }

  handleChangePlayer(playerId) {
    this.props.changePlayer(playerId);
  }
  
  getRows() {
	if (this.state.players.equals([]))
		return;
	  
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
          <td className='tableCell'><span className='link' onClick={this.handleChangePlayer.bind(this, datum.playerId)}>{datum.playerName + ' (' + datum.team + ', ' + datum.pos + ')'}</span></td>
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

  handleFilterChange(sortBy, team, position) {
    this.props.changeFilter(sortBy, team, position);
  }
  
  getSortOptions() {
	let options = ['PRICE', 'VOLUME', 'CHANGE'];
	let rows = [];
	
	for (let i = 0; i < options.length; ++i) {
		rows.push(
          <MenuItem eventKey={options[i]} 
			onSelect={this.handleFilterChange.bind(this, options[i], this.props.team, this.props.position)}>
			{options[i]}</MenuItem>
		);
	}
	
	return rows;
  }
  
  getTeams() {
	if (this.props.players.equals([]))
		return;
	  
	let teams = this.props.players.map((datum) => {
		return datum.team;
	}).unique().sort();
	
	let rows = [];
	
	if (this.props.team !== 'ALL TEAMS') {
		rows.push(<MenuItem eventKey='ALL TEAMS' 
			onSelect={this.handleFilterChange.bind(this, this.props.sortBy, 'ALL TEAMS', this.props.position)}>
			ALL TEAMS</MenuItem>);
    }
  
	for (let i = 0; i < teams.length; ++i) {
		if (teams[i] === this.props.team)
			continue;
		
		rows.push(
          <MenuItem eventKey={teams[i]} 
			onSelect={this.handleFilterChange.bind(this, this.props.sortBy, teams[i], this.props.position)}>
			{teams[i]}</MenuItem>
		);
	}
	
	return rows;
  }
  
  getPositions() {
	if (this.props.players.equals([]))
		return;
	  
	let positions = this.props.players.map((datum) => {
		return datum.pos;
	}).unique().sort();
	
	let rows = [];
	
	if (this.props.position !== 'ALL POSITIONS') {
		rows.push(<MenuItem eventKey='ALL POSITIONS' 
			onSelect={this.handleFilterChange.bind(this, this.props.sortBy, this.props.team, 'ALL POSITIONS')}>
			ALL POSITIONS</MenuItem>);
	}
	
	for (let i = 0; i < positions.length; ++i) {
		if (positions[i] === this.props.position)
			continue;
		
		rows.push(
          <MenuItem eventKey={positions[i]} 
			onSelect={this.handleFilterChange.bind(this, this.props.sortBy, this.props.team, positions[i])}>
				{positions[i]}</MenuItem>
		);
	}
	
	return rows;
  }
  
  filter() {
	let players = this.props.players.slice(0);
	
	// Filter Team
	if (this.props.team !== 'ALL TEAMS') {
		players = players.filter((datum) => {
			return datum.team === this.props.team;
		});
	}
	
	// Filter Position
	if (this.props.position !== 'ALL POSITIONS') {
		players = players.filter((datum) => {
			return datum.pos === this.props.position;
		});
	}
	
	// Apply Sort
	switch (this.props.sortBy) {
		case 'PRICE':
			players.sort((a, b) => {
				return b.price - a.price;
			});
			
			break;
		case 'VOLUME':
			players.sort((a, b) => {
				return b.volume - a.volume;
			});
			
			break;
		case 'CHANGE':
			players.sort((a, b) => {
				return Math.abs(b.change) - Math.abs(a.change);
			});
			
			break;
		default:
			alert('Invalid Sort Option');
	}
	
	this.setState({
		'players': players
	});
  }
  
  render() {
    let tbl = this.buildTable();
	
    return (
      <div className="PlayersTable">
        <div className="PlayersTable-container">
          <h1 className='heading'>Players</h1>
          
		  <ButtonGroup>
		    <DropdownButton title={this.props.team}>
			  {this.getTeams()}
		    </DropdownButton>
		    <DropdownButton title={this.props.position}>
			  {this.getPositions()}
		    </DropdownButton>
		    <DropdownButton title='SORT BY'>
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
