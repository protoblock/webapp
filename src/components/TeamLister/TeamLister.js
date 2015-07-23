import React, { PropTypes } from 'react';
import styles from './TeamLister.less';
import withStyles from '../../decorators/withStyles';
import TeamStore from '../../stores/TeamStore';

function getTeamState(){
  return {
    teams: TeamStore.getTeams()
  };
};

@withStyles(styles)
class TeamRow {

  static propTypes = {
    team: PropTypes.object.isRequired
  };

  render() {
    return (
      <tr>
        <td>{this.props.team.name}</td>
        <td>{this.props.team.city}</td>
        <td>{this.props.team.division}</td>
        <td>{this.props.team.conference}</td>
      </tr>
    )
  };
};

@withStyles(styles)
class TeamLister extends React.Component{

  constructor(props) {
    super(props);
    this.state = getTeamState();
  }

  getTeamRows() {
    let rows = []
    if (this.state.teams.length > 0){
      this.state.teams.forEach((team) => {
          rows.push(<TeamRow team={team} />);
      });
    } else {
      rows = (<tr>
                <td colSpan='4'>
                  No Teams loaded
                </td>
              </tr>);
    }
    return rows;
  };

  render() {

    return (
      <table>
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Division</th>
          <th>Conference</th>
        </thead>
        <tbody>
          {this.getTeamRows()}
        </tbody>
      </table>
    );
  };
}

export default TeamLister;
